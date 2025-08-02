class Fullmenu {
    constructor(id, name, price, description, imageUrl, isHome, isActive) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.isHome = isHome;
        this.isActive = isActive;
    }
}

module.exports = Fullmenu;