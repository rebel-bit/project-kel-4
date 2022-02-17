<template>
  <div class="bungkus">
    <div class="container-fluid">
      <div
        class="row main-content bg-success text-center"
        style="margin-left: 300px"
      >
        <div class="col-md-4 text-center company__info">
          <span class="company__logo"
            ><h1><span class="fas fa-user"></span></h1
          ></span>
          <h4 class="company_title"></h4>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form">
          <div class="container-fluid">
            <div class="row">
              <h2 class="ml-4">Sign In</h2>
            </div>
            <div class="row">
              <form control="" class="form-group">
                <div class="row">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form__input"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="row">
                  <!-- <span class="fa fa-lock"></span> -->
                  <input
                    type="Email"
                    name="Email"
                    id="Email"
                    class="form__input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="row">
                  <!-- <span class="fa fa-lock"></span> -->
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form__input"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="row">
                  <input
                    type="submit"
                    value="Submit"
                    class="btn"
                    style="border: 1px solid grey"
                  />
                </div>
              </form>
            </div>
            <div class="row">
              <p>
                Don't have an account?
                <router-link to="/register"> Register Here </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <!-- <div class="container-fluid text-center footer">
		<p>Coded with &hearts; by <a href="https://bit.ly/yinkaenoch">Yinka.</p>
	</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
/* .bungkus {
  margin-left: 200px;
} */
.main-content {
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  margin: 5em auto;
  display: flex;
}
.company__info {
  background-color: grey;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.fa-android {
  font-size: 3em;
}
@media screen and (max-width: 640px) {
  .main-content {
    width: 90%;
  }
  .company__info {
    display: none;
  }
  .login_form {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
@media screen and (min-width: 642px) and (max-width: 800px) {
  .main-content {
    width: 70%;
  }
}
.row > h2 {
  color: grey;
}
.login_form {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
form {
  padding: 0 2em;
}
.form__input {
  width: 100%;
  border: 0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em 0.5em 0.5em;
  padding-left: 2em;
  outline: none;
  margin: 1.5em auto;
  transition: all 0.5s ease;
}
.form__input:focus {
  border-bottom-color: grey;
  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);
  border-radius: 4px;
}
.btn {
  transition: all 0.5s ease;
  width: 70%;
  border-radius: 30px;
  color: #008080;
  font-weight: 600;
  background-color: #fff;
  margin-top: 1.5em;
  margin-bottom: 1em;
  border: 1px solid black;
}
.btn:hover,
.btn:focus {
  background-color: grey;
  color: #fff;
}
</style>