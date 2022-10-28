function add_images() {
    const link = [
        "https://online.fliphtml5.com/axgaz/znnp/",
        "https://online.fliphtml5.com/axgaz/qdfi/",
        "https://online.fliphtml5.com/axgaz/sumx/",
        
    ]
    const parent = document.getElementsByClassName("grid-div");
    for (let i=1; i<13; i++) {
        const node = document.createElement("div");
        const button = document.createElement("button");
        const image = document.createElement("img");
        node.classList.add("md:w-1/4")
        image.src = "./resources/shot(" + i.toString() + ").jpg";
        image.classList.add("w-full", "md:mt-5", "mt-10")
        button.appendChild(image)
        node.appendChild(button);
        parent[0].appendChild(node);
    }
}