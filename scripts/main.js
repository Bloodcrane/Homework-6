const changeBackgroundColor = () => {
    const color = document.getElementById("colorInput").value.toLowerCase();
    const validColors = ["red", "blue", "green", "black", "white"];
    if (validColors.includes(color)) {
      document.body.style.backgroundColor = color;
    } else {
      alert("Invalid color");
    }
  };
  
  const openModal = () => {
    document.getElementById("modal").style.display = "block";
  };
  
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };
  
  const calculateAverage = () => {
    const numbers = document.getElementById("numberInput").value.split(":");
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    const average = sum / numbers.length;
    document.getElementById("averageResult").textContent = `Average: ${average}`;
  };
  