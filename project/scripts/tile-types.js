const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menu = document.querySelector(".main-nav");


menuButton.addEventListener("click", function(){

    menuIcon.classList.toggle("open");
    close.classList.toggle("closed");
    menu.classList.toggle("closed");

    // Check whether the menu is currently open
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

// Update the accessibility attributes
    menuButton.setAttribute("aria-expanded", !isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu"
    );
   
});

/*
   1. TILE DATA
*/

const tileTypes = [
    {
        id: "ceramic",
        name: "Ceramic Tiles",

        imageUrl: "https://i.pinimg.com/1200x/96/fb/54/96fb549bf44aad0f42c8894ecaf81e6e.jpg",
        imageAlt: "Ceramic tiles arranged in a clean modern interior",

        tag: "Versatile and practical",

        shortDescription:
            "A popular tile option made from shaped clay and other natural materials, fired in a kiln.",

        description:
            "Ceramic tiles are made from clay-based materials that are shaped and fired. They are available in many colours, patterns, finishes, and sizes. Glazed ceramic tiles have a protective surface that helps resist stains and makes everyday cleaning easier.",

        uses: [
            "Kitchen walls and backsplashes",
            "Bathroom walls and suitable bathroom floors",
            "Living areas and bedrooms when the tile is rated for the intended use"
        ],

        advantages: [
            "Available in many designs and finishes",
            "Generally affordable compared with many premium tile options",
            "Easy to clean and maintain when properly installed"
        ],

        maintenance:
            "Check the tile's slip rating before using it on a wet floor. Some ceramic tiles are more suitable for walls than floors."
    },

    {
        id: "porcelain",
        name: "Porcelain Tiles",

        imageUrl: "https://i.pinimg.com/736x/38/ca/a0/38caa027ddf1b0f03276b7e473365f3c.jpg",
        imageAlt: "Porcelain floor tiles in a contemporary interior",

        tag: "Dense and durable",

        shortDescription:
            "A dense ceramic tile made with carefully selected materials and fired to achieve low water absorption.",

        description:
            "Porcelain tiles are a type of ceramic tile manufactured to meet specific requirements for density and water absorption. They are often chosen for busy areas because suitable products can provide excellent wear resistance and durability.",

        uses: [
            "Living rooms and hallways",
            "Kitchens and bathrooms",
            "Commercial spaces and other busy areas when appropriately rated"
        ],

        advantages: [
            "Very low water absorption",
            "Many styles imitate natural stone, wood, or concrete",
            "Suitable products can withstand substantial everyday use"
        ],

        maintenance:
            "Choose a slip-resistant finish for wet areas. Large or heavy porcelain tiles may require specialist cutting tools and careful installation."
    },

    {
        id: "natural-stone",
        name: "Natural Stone Tiles",

        imageUrl: "https://i.pinimg.com/736x/15/49/98/154998014d65956f13c4297c4b6e2bf7.jpg",
        imageAlt: "Natural stone tiles displaying their distinctive textures",

        tag: "Natural and distinctive",

        shortDescription:
            "Tiles cut from natural materials such as marble, granite, limestone, and slate.",

        description:
            "Natural stone tiles are cut from quarried stone. Each piece may have different veining, colour variations, and textures, giving a floor or wall a distinctive appearance. Different stones have different hardness, porosity, and maintenance requirements.",

        uses: [
            "Feature walls and decorative surfaces",
            "Living rooms and entrance areas with suitable stone",
            "Bathrooms and outdoor spaces when the stone and finish are appropriate"
        ],

        advantages: [
            "Distinctive natural patterns and textures",
            "A premium, timeless appearance",
            "Different stone varieties offer different performance characteristics"
        ],

        maintenance:
            "Some natural stones need periodic sealing and stone-safe cleaning products. Confirm the stone's suitability before using it in wet or outdoor areas."
    },

    {
        id: "mosaic",
        name: "Mosaic Tiles",

        imageUrl: "images/mosaic-tile.webp",
        imageAlt: "Small mosaic tiles arranged in a decorative pattern",

        tag: "Decorative and detailed",

        shortDescription:
            "Small pieces of tile, glass, stone, or other materials arranged into patterns or mounted on sheets.",

        description:
            "Mosaic tiles use small individual pieces to create decorative surfaces, geometric patterns, and detailed designs. They can be made from ceramic, porcelain, glass, or natural stone. Their many joints can improve traction in some installations, depending on the tile and grout.",

        uses: [
            "Bathroom feature walls and shower floors with suitable products",
            "Kitchen backsplashes",
            "Decorative borders, niches, and feature areas"
        ],

        advantages: [
            "Useful for intricate patterns and decorative designs",
            "Can fit curved or irregular surfaces more easily than large tiles",
            "Available in many colours, materials, and finishes"
        ],

        maintenance:
            "Mosaics have many grout joints, which may need more cleaning. Select tiles, grout, and installation materials rated for the intended wet or dry area."
    }
];


/*
   2. SELECT PAGE ELEMENTS
 */

const tileGrid = document.querySelector("#tileGrid");
const tileInformation = document.querySelector("#tileInformation");


/*
   3. CREATE TILE GALLERY CARDS
 */

function displayTileCards() {

    if (!tileGrid) return;

    tileGrid.replaceChildren();

    tileTypes.forEach(function (tile) {

        const card = document.createElement("article");
        card.classList.add("tile-card");

        const image = document.createElement("img");
        image.src = tile.imageUrl;
        image.alt = tile.imageAlt;
        image.loading = "lazy";
        image.width = 600;
        image.height = 400;

        const cardContent = document.createElement("div");
        cardContent.classList.add("tile-card-content");

        const tag = document.createElement("span");
        tag.classList.add("tile-tag");
        tag.textContent = tile.tag;

        const heading = document.createElement("h3");
        heading.textContent = tile.name;

        const description = document.createElement("p");
        description.textContent = tile.shortDescription;

        const link = document.createElement("a");
        link.classList.add("tile-card-link");
        link.href = `#${tile.id}-details`;
        link.textContent = "Learn more";

        const arrow = document.createElement("span");
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";

        link.append(arrow);

        cardContent.append(
            tag,
            heading,
            description,
            link
        );

        card.append(image, cardContent);

        tileGrid.append(card);
    });
}


/* 
   4. CREATE DETAILED TILE SECTIONS
*/


function displayTileInformation(tileList) {

    if (!tileInformation) return;

    const informationGrid = document.createElement("div");
    informationGrid.classList.add("tile-information");

    tileList.forEach(function (tile) {

        const article = document.createElement("article");
        article.classList.add("tile-info-card");
        article.id = `${tile.id}-details`;

        const image = document.createElement("img");
        image.classList.add("tile-info-image");
        image.src = tile.imageUrl;
        image.alt = tile.imageAlt;
        image.loading = "lazy";
        image.width = 600;
        image.height = 450;

        const content = document.createElement("div");
        content.classList.add("tile-info-content");

        const heading = document.createElement("h3");
        heading.textContent = tile.name;

        const description = document.createElement("p");
        description.textContent = tile.description;

        const usesHeading = document.createElement("h4");
        usesHeading.textContent = "Common uses";

        const usesList = document.createElement("ul");

        tile.uses.forEach(function (use) {
            const listItem = document.createElement("li");
            listItem.textContent = use;
            usesList.append(listItem);
        });

        const advantagesHeading = document.createElement("h4");
        advantagesHeading.textContent = "Key advantages";

        const advantagesList = document.createElement("ul");

        tile.advantages.forEach(function (advantage) {
            const listItem = document.createElement("li");
            listItem.textContent = advantage;
            advantagesList.append(listItem);
        });

        const maintenance = document.createElement("p");
        maintenance.classList.add("maintenance-note");
        maintenance.textContent = tile.maintenance;

        content.append(
            heading,
            description,
            usesHeading,
            usesList,
            advantagesHeading,
            advantagesList,
            maintenance
        );

        article.append(image, content);
        informationGrid.append(article);
    });

    tileInformation.replaceChildren(informationGrid);
}



/*
   5. FOOTER INFORMATION
 */

function setFooterInformation() {

    const currentYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent =
            `Last modified: ${document.lastModified}`;
    }
}


/* 
   6. INITIALIZE THE PAGE
*/


/* FILTER TILE TYPES */

const ceramicTiles = tileTypes.filter(function (tile) {
    return tile.id === "ceramic";
});

const porcelainTiles = tileTypes.filter(function (tile) {
    return tile.id === "porcelain";
});

const naturalStoneTiles = tileTypes.filter(function (tile) {
    return tile.id === "natural-stone";
});

const mosaicTiles = tileTypes.filter(function (tile) {
    return tile.id === "mosaic";
});


/* INITIALIZE THE PAGE */

displayTileCards();
displayTileInformation(tileTypes);
setFooterInformation();


/* LEARN MORE FILTER */

document.querySelectorAll(".tile-card-link").forEach(function (link) {

    link.addEventListener("click", function (event) {
        event.preventDefault();

        const selectedId = link.getAttribute("href")
            .replace("#", "")
            .replace("-details", "");

        switch (selectedId) {
            case "ceramic":
                displayTileInformation(ceramicTiles);
                break;

            case "porcelain":
                displayTileInformation(porcelainTiles);
                break;

            case "natural-stone":
                displayTileInformation(naturalStoneTiles);
                break;

            case "mosaic":
                displayTileInformation(mosaicTiles);
                break;
        }

        tileInformation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

});

