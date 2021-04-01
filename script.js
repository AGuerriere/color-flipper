const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

const colorDiv = document.querySelector(".display");
function clickMe(){
        color = random_hex_color_code()
        document.body.style.backgroundColor = color;
        colorDiv.textContent = "Current background color:" + color;
};

