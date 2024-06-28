
export const getBackgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return "https://i.pinimg.com/originals/f1/8c/0d/f18c0d150bee6c043a35b2a269e4a0b5.gif";
      case "Clouds":
        return "https://i.pinimg.com/originals/19/9d/36/199d3683f2b758b695545e095352f840.gif";
      case "Rain":
        return "https://i.pinimg.com/originals/2c/49/2f/2c492f38a18bf58d54d5eb0ea64abfc5.gif";
      case "Snow":
        return "https://i.pinimg.com/originals/45/65/44/456544b89487d793d72f8eb9f69b6188.gif";
      default:
        return "https://example.com/default.jpg";
    }
  };