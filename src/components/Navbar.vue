<template>
  <div>
    <div class="header">
      <h1></h1>
    </div>

    <div class="topnav">
      <a href="/BeliUser">Beli Kendaraan</a>
      <a href="/InfoMotor">Info Kendaraan</a>
      <a href="/login" style="float: right">Login</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style >
.header {
  padding: 10px;
  width: 1140px;
  text-align: center;
}
.header h1 {
  font-size: 50px;
}
/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #caced1;
  margin-left: 10px;
  margin-right: 170px;
  width: 1120px;
}
/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* Change color on hover */
.topnav a:hover {
  background-color: #fd2727;
  color: black;
}
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}
/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  background-color: lightblue;
  padding-left: 20px;
}
/* Fake image */
.fakeimg {
  background-color: rgb(160, 145, 145);
  width: 100%;
  padding: 20px;
}
/* Add a card effect for articles */
.card {
  background-color: skyblue;
  padding: 20px;
  margin-top: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Footer */
.footer {
  padding: 10px;
  text-align: center;
  background: skyblue;
  margin-top: 20px;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}
</style>