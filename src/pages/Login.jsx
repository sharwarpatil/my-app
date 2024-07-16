import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //images
  const sliderImg1 = `${process.env.PUBLIC_URL}/assets/images/img1.png`;
  const sliderImg2 = `${process.env.PUBLIC_URL}/assets/images/img2.png`;
  const sliderImg3 = `${process.env.PUBLIC_URL}/assets/images/img3.jpg`;
  const backgroungimage = `${process.env.PUBLIC_URL}/assets/images/bg.png`;

  return (
    <div
      class="mainbody"
      style={{
        backgroundImage: `url(${backgroungimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="left">
          <div className="logo">
            <h1>Get Started</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                fullWidth
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                error={!!errors.email}
                label="Email"
              />
              {errors.email && (
                <Typography variant="body2" color="error">
                  {errors.email.message}
                </Typography>
              )}
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 6,
                    matchPattern: (value) =>
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                        value
                      ),
                  },
                })}
                error={!!errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors.password?.type === "required" && (
                <Typography variant="body2" color="error">
                  Password is required.
                </Typography>
              )}
              {errors.password?.type === "checkLength" && (
                <Typography variant="body2" color="error">
                  Password should be at least 6 characters.
                </Typography>
              )}
              {errors.password?.type === "matchPattern" && (
                <Typography variant="body2" color="error">
                  Password should contain at least one uppercase letter,
                  lowercase letter, digit, and special symbol.
                </Typography>
              )}
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </div>
        <div className="right">
          <Slider {...settings}>
            <div>
              <div class="slickbox">
                <div class="bg-slate-400  h-[80vh]">
                  {" "}
                  <img src={sliderImg1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div class="slickbox">
                <div class="bg-red-100 h-[80vh]">
                  {" "}
                  <img src={sliderImg2} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div class="slickbox">
                <div class="bg-green-100 h-[80vh]">
                  <img src={sliderImg3} alt=""></img>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Login;
