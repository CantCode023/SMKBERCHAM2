function add_images() {
    const link = [
        "https://online.fliphtml5.com/axgaz/znnp/",
        "https://online.fliphtml5.com/axgaz/qdfi/",
        "https://online.fliphtml5.com/axgaz/sumx/",
        "https://online.fliphtml5.com/axgaz/ejvq/",
        "https://online.fliphtml5.com/axgaz/dtmt/",
        "https://online.fliphtml5.com/axgaz/uqcu/",
        "https://online.fliphtml5.com/axgaz/wnpw/",
        "https://online.fliphtml5.com/axgaz/ekxc/",
        "https://online.fliphtml5.com/axgaz/zfeu/",
        "https://online.fliphtml5.com/axgaz/awao/",
        "https://online.fliphtml5.com/axgaz/cqmd/",
        "https://online.fliphtml5.com/axgaz/npsj/",
        "https://online.fliphtml5.com/qqhav/amcc/",
        "https://online.fliphtml5.com/qqhav/cwsa/",
        "https://online.fliphtml5.com/qqhav/snzo/",
        "https://online.fliphtml5.com/qqhav/kllv/",
        "https://online.fliphtml5.com/nokjl/mays/",
        "https://online.fliphtml5.com/nokjl/cjlw/",
        "https://online.fliphtml5.com/nokjl/ydjq/",
        "https://online.fliphtml5.com/nokjl/csrj/"
    ];
    const parent = document.getElementsByClassName("grid-div");
    for (let i=1; i<21; i++) {
        const node = document.createElement("div");
        const button = document.createElement("button");
        const image = document.createElement("img");
        node.classList.add("md:w-1/4");
        button.onclick = () => {
            window.open(link[i-1]);
        }
        image.src = "./resources/shot(" + i.toString() + ").jpg";
        image.onerror = () => {
            image.src = "./resources/shot(" + i.toString() + ").jpeg";
        };
        image.classList.add("w-full", "md:mt-5", "mt-10");
        button.appendChild(image);
        node.appendChild(button);
        parent[0].appendChild(node);
    };
};