<template>
  <div>
    <div class="navbar">
      <div class="admin">
        <h1>Dashboard Admin</h1>
        <div>
          <div class="sidebarr">
            <div class="nav"></div>
            <a href="/homeadmin"
              ><button class="btnn">
                <i
                  style="margin-right: 5px; color: yellow"
                  class="fa fa-home"
                ></i></button
              ><br
            /></a>
            <a href="/InfoMotorAdmin"
              ><button class="btnn">
                <i
                  style="margin-right: 5px; color: silver"
                  class="fa fa-motorcycle"
                ></i></button
              ><br
            /></a>
            <a href="/Beli"
              ><button class="btnn">
                <i
                  style="margin-right: 5px; color: lightgreen"
                  class="fa fa-money"
                ></i></button
              ><br
            /></a>
            <a href="/peduli"
              ><button class="btnn">
                <i
                  style="margin-right: 5px; color: red"
                  class="fa fa-heart"
                ></i></button
              ><br
            /></a>
          </div>
          <a href="/login"
            ><button class="btnn">
              <i
                style="margin-right: 5px; color: silver"
                class="fa fa-sign-out"
              ></i></button
            ><br
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background: #e7e7e7ff;
}
.navbar {
  width: 100%;
  height: 60px;
  background: #3a6effff;
  border-bottom: 2px solid #585858ff;
}
.sidebar {
  width: 70px;
  height: 1120px;
  background: #3a3a3aff;
  float: left;
  margin-left: -10px;
}

.admin {
  color: white;
  font-size: 35px;
  line-height: 60px;
  margin-left: 20px;
}
.btn {
  width: 70px;
  height: 40px;
  background: #3a3a3aff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #3a3a3aff;
}
.btnt {
  width: 70px;
  height: 40px;
  background: #2d2d2dff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #2d2d2dff;
}
.btnn {
  width: 70px;
  height: 40px;
  background: #595959ff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #595959ff;
}
.btn:hover {
  background: #595959ff;
}
.btnn:hover {
  background: #353535ff;
}
.title {
  width: 120px;
  height: 150px;
  float: right;
}
.int {
  color: white;
  margin: 30px 30px;
}
.intt {
  color: white;
  margin: 30px 30px;
}
.inttt {
  color: white;
  margin: 30px 30px;
}
.intttt {
  color: white;
  margin: 30px 30px;
}

.insert {
  margin-top: 40px;
  margin-left: 20px;
  width: 150px;
  height: 30px;
  background: #507ac7ff;
  border: none;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px 4px grey;
  cursor: pointer;
}
.insert:hover {
  background: #335fffff;
}

.dasare {
  width: 500px;
  height: 300px;
  margin: 30px auto;
  border-radius: 20px;
  border: 1px solid #d9d9d9ff;
}
.in {
  width: 400px;
  margin-left: 50px;
  margin-top: 50px;
  height: 40px;
  background: none;
  border: 1px solid #55b6ffff;
  border-radius: 20px;
  outline: none;
  text-align: center;
}
.inn {
  width: 400px;
  margin-left: 50px;
  margin-top: 10px;
  height: 40px;
  background: none;
  border: 1px solid #55b6ffff;
  border-radius: 20px;
  text-align: center;
  outline: none;
}
.innn {
  margin-left: 50px;
  margin-top: 10px;
}
.sbm {
  width: 148px;
  height: 30px;
  background-color: #5180eeff;
  border: none;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px 3px grey;
}
</style>