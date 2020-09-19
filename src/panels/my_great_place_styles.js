const K_WIDTH = 90;
const K_HEIGHT = 90;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  textAlign: "center",
  color: "black",
  borderColor: "white",
  fontSize: 16,

  fontWeight: "regular",
  padding: 4,
};

export { greatPlaceStyle };
