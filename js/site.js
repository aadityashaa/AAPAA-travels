function swap()
{
  document.getElementById("head_text").innerHTML="Sign Up"
  document.getElementById("username").placeholder="Enter your Email"
  document.getElementById("password").placeholder="Choose strong password"
  document.getElementById("fp").style.visibility="hidden"
  document.getElementById("sp").style.visibility="hidden"
  document.getElementById("sb_login").style.visibility="visible"
  document.getElementById("butt").value="Sign Up"
}
function swapback()
{
  document.getElementById("head_text").innerHTML="Login"
  document.getElementById("username").placeholder="Username / Email"
  document.getElementById("password").placeholder="Password"
  document.getElementById("fp").style.visibility="visible"
  document.getElementById("sp").style.visibility="visible"
  document.getElementById("sb_login").style.visibility="hidden"
  document.getElementById("butt").value="Login"
}
