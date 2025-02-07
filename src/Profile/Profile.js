import Header from "../header/header";
import pcss from "../Profile/pcss.css";
import './resum.jpg';
//import resum from '/Profile/resum.jpg';
export default function Profile(params){
    return(
        <>
        <div className="header"><Header/></div>
        <div className="main"> 
            <div className="resume-builder">
                <center><h1><b>Personal Information:</b></h1></center>
                <div className="photo">
                    <img src= ".\src\Profile\resum.jpg" alt="poornima" width="200" height="200" />
                    <div></div>

                </div>

                <div className="career">
                    <h2>Career Objective:</h2>
                    <p>I'm hardworking and self motivated candidate .<br></br>I put all my efforts towards the growth of an organisation  and also enhance my personal growth along with the growth of your company.</p>
            </div>

            <div className="personal_info">
                <h2>Personal Details:</h2>
                <p><strong>Name: </strong>Poornima Shettigar</p>
                <p><strong>Address: </strong>Sasthana ,Udupi</p>
                <p><strong>Email: </strong>poornimashettigar1@gmail.com</p>
                <p><strong>Phone No: </strong>+91 9513677895</p>
                <p><strong>Date of Birth: </strong>10-10-2003</p>
                <p><strong>Linkedin Profile: </strong><a href="http://www.linkedin.com/in/poornima-shettigar-0850a129b" target="_blank">www.linkedin.com/in/poornima-shettigar-0850a129b</a></p>
                <p><strong>Website: </strong><a href="#">www.poornimashettigar.com</a></p>

            </div>


            <div className="lang">
                <h2>Languages:</h2>
                <ul>
                    <li>English</li>
                    <li>Kannada</li>
                </ul>
            </div>
            <div className="Qualification">
                <h2>Qualification:</h2>
                <table border="1" class="tq">
                    <tr>
                        <th>Course/Degree</th>
                        <th>College Name</th>
                        <th>University/Board</th>
                        <th>Percentage</th>
                        <th>Year of Passing</th>
                    </tr>
                    <tr>
                        <td>BCA</td>
                        <td>Dr.G. Shankar Government Women's First Grade College and P.G Study Center Ajjarkadu Udupi</td>
                        <td>Mangalore University</td>
                        <td><strong>93%</strong></td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>PUC(BAECs)</td>

                        <td>Government Pre University College For Girls,Udupi</td>
                        <td>Karnataka PU Board</td>

                        <td><strong>97%</strong></td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td>SSLC</td>

                        <td>Government High School Brahmavar</td>
                        <td>Karnataka Board</td>
                        <td><strong>91%</strong></td>
                        <td>2019</td>
                    </tr>
                </table>
            </div>
        </div><div className="additional-info">

                <center><h1><b>Additional Information:</b></h1></center>
                <div className="course">
                    <h2>Courses:</h2>
                    <p>Diploma in Information Technology</p>
                    <p>Basic PHP Programmimg</p>
                    <p>Intoduction to PHP Programming</p>
                </div>
                <div className="skill">
                    <h2>Skill:</h2>
                    <ol>
                        <li>MS-office</li>
                        <li>Python</li>
                        <li>DBMS</li>
                        <li>HTML</li>
                        <li>Java</li>
                        <li>PHP</li>
                    </ol>
                </div>
                <div className="Interest">
                    <h2>Interest:</h2>
                    <p>IT</p>
                    <p>Teaching</p>
                </div>
                <div className="hobbies">
                    <h2>Hobbies:</h2>
                    <p>Gardening,Reading Novels,Exploring New thing,Listening to song</p>
                </div>
                <div className="Experience">
                    <h2>Experience:</h2>

                    <div className="Computer-teacher">
                        <h4><u>Computer Teacher</u> </h4>
                        <p>Govt. High School Gundmi</p>
                        <p><strong>August-2024 to October-2024</strong></p>
                    </div>
                    <div className="wikipedia">
                        <h4><u>Wikipedia Translator</u></h4>
                        <p>Online Work</p>
                        <p><strong>September-2024 to January-2025</strong></p>
                    </div>
                </div>
                <div className="project">
                    <h2>Project</h2>
                    <h4>Student Performance Analysis Based Behavoiral Feature using Random Forest Algorithm</h4>
                    <p>This project Mainly focus on analysing how the Student's behavioral features affect on their academic performance using Random Forest Algorithm.<br></br>
                        It will also uses Various algorithm to analyzing student performance then displays the output of each algorithm and also Optimise the performane of one algorithm.</p>

                </div>


                <div>
                </div>


            </div>
        </div>
        </> );

    }