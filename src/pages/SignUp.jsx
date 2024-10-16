import React from "react"
function SignUp () {
    return (
        <div>
            <div class="login_form">
                <form action="#">
                    <div class="input_box">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter email address" required />
                    </div>
                    <div class="input_box">
                        <label for="phone number">Phone number</label>
                        <input type="number" id="phone" placeholder="enter your phone number" required />
                    </div>
                    <div class="input_box">
                        <label for="Password">Password</label>
                        <input type="password" id="pass word" placeholder="Enter your password" required />
                    </div>
                    <div class="input_box">
                        <label for="repassword">Repeat password</label>
                        <input type="password" id="repassword" placeholder="repeat your password" required />
                    </div>
                    
                    <div class="container1">
                        <div class="input_box">
                            <label for="blood">Blood group</label>
                            <select id="blood">
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="o+">O+</option>
                                <option value="o-">O-</option>
                            </select>
                        </div>
                        <div class="sex">
                            <label for="gender" style="display: block;">Gender</label>
                            <select id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="sign" style="margin: 20px 0px;">
                        <button type="submit">sign up </button>
                         <button>sss</button> 
                    </div>
                    
                </form>
            </div>      
        </div>
    );
}
export default SignUp;