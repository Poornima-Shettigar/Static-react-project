import Header from "../header/header";
export default function Table(params){
    return(
    <>
        <div className="header"><Header/></div>
        <h2>Class Time Table </h2>
        <div className="tableName">
        
            <table border="1">
                
                <thead>
                    <tr><th colspan="9">CLASS TIME FOR I SEMESTER</th></tr>
                    <tr>
                        <th>Day:</th>
                        <th >I(9:30-10:15)</th>
                        <th >II(10:15-11:05)</th>
                        <th >III(11:15-12:00)</th>
                        <th >IV(12:00-12:45)</th>
                        <th >V(12:45-01:45)</th>
                        <th >VI(01:45-02:45)</th>
                        <th>VII(02:45-03:45)</th>
                        <th>VIII(03:45-04:55)</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td >Monday</td>
                    <td colspan="3">Python Programing Lab</td>
                    <td>OOPS</td>
                    <td rowspan="6"><center>L<br></br>U<br></br>N<br></br>C<br></br>H<br></br>B<br></br>R<br></br>E<br></br>A<br></br>K</center></td>
                    <td>PP</td>
                    <td>ADS</td>
                    <td>FIT</td>
                </tr>
                <tr>
                    <td >Tuesday</td>
                    <td colspan="3">ADS Programing Lab</td>
                    <td>OS</td>
                    <td>MFC</td>
                    <td>PP</td>
                    <td>FIT</td>
                </tr>
                <tr>
                    <td >Wednesday</td>
                    <td colspan="3">PP Programing Lab</td>
                    <td>ADS</td>
                    <td>OOPS</td>
                    <td>PP</td>
                    <td>FIT</td>
                </tr>
                <tr>
                    <td >Thursady</td>
                    <td colspan="3">ADS Programing Lab</td>
                    <td>MFC</td>
                    <td>OS</td>
                    <td>OOPS</td>
                    <td>FIT</td>
                </tr>
                <tr>
                    <td >Friday</td>
                    <td >ADS</td>
                    <td>Communication</td>
                    <td>MFC</td>
                    <td>PP</td>
                    <td>OS</td>
                    <td>MFC</td>
                    <td>Mentor</td>
                </tr>
                <tr>
                    <td >Saturday</td>
                    <td >OS</td>
                    <td>ADS</td>
                    <td>OOPS</td>
                    <td>IT and CA</td>
                    
                </tr>
                </tbody>
            </table>
            
        </div>
        </>
         );

    }