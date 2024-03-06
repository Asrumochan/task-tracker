function Button({color,text,onClick}) {
  return (
    <button className="btn" style={{backgroundColor: color}} onClick={onClick}>{text}</button>
  )
}
Button.defaultProps={
  text:"Add",
  color:"green"
}
export default Button 