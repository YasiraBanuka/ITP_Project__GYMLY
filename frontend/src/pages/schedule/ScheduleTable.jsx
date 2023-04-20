import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import html2pdf from 'html2pdf.js';

function isPdf() {
    const userAgent = navigator.userAgent.toLowerCase();
    return (userAgent.indexOf('firefox') > -1 || userAgent.indexOf('chrome') > -1);
}

function generatePDF() {
    const element = document.getElementById('pdf-table');
    const opt = {
        margin: 0.3,
        filename: 'TimeTable.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
        const pdfBlob = pdf.output('blob');
        const blobUrl = URL.createObjectURL(pdfBlob);
        window.open(blobUrl, '_blank');
    });
}


const ScheduleTable = () => {
    isPdf = false;
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [schedules, setSchedules] = useState([]);
    const [tempData, setTempData] = useState(schedules);


    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/schedules");
                setSchedules(response.data);
            } catch (error) {
                console.log('Error fetching schedules:', error);
            }

            hideLoadingSpinner();
        };
        fetchSchedules();
    }, []);


    const handleEdit = (id) => {
        navigate(`/changetimeslot/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/schedules/${id}`)
            .then(response => {

                console.log('Schedule deleted successfully');
                // Refresh the table to show updated data
                window.alert('Data has been deleted successfully');
                window.location.reload();

            })
            .catch(error => {

                console.log('Error deleting schedule:', error);

            });
    }


    const onSearchChange = (value) => {
        console.log(value);

        const newData = schedules.filter((sche) =>

            sche.date.toLocaleLowerCase().includes(value.toLocaleLowerCase())

        );
        console.log(newData);
        setTempData(newData);


    }


    return (
        <section>
            <Container>
                <div className="title code">Schedule Daily Training Time Slot</div>
                <br />
                <Row>
                    <Col>
                        <input type="button" className="tertiary_btn" value="Generate a report" onClick={generatePDF} />
                    </Col>
                    <Col>
                        <Row>

                            <Col>
                                <a href="/changeinstrutor/" target="_blank" className="tertiary_btn">Change Instructor</a>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <input
                                    type="search"
                                    className='search'
                                    placeholder="Search"
                                    onChange={(e) => onSearchChange(e.target.value)}
                                />

                            </Col>
                            <Col>
                                <AiOutlineSearch className="i" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />

                <Row>
                    <div id='pdf-table'>

                        <Table dark striped bordered hover responsive>

                            <tbody>
                                {tempData.map((row, index) => (
                                    <tr key={row.index}>
                                        <td>{row.dayscount}</td>
                                        <td>{row.timeslot}</td>
                                        <td>{row.date}</td>
                                        <td>{row.instructor}</td>
                                        <td>{row.section}</td>
                                        <td>
                                            <button className='edit_btn' onClick={() => handleEdit(row._id)}>edit</button>
                                        </td>
                                        <td>
                                            <button className='delete_btn' onClick={() => handleDelete(row._id)}>delete</button>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>TimeSlot</th>
                                    <th>Date</th>
                                    <th>Instructor</th>
                                    <th>Section</th>
                                    {isPdf ? null : (
                                        <> <th>Edit</th>
                                            <th>Delete</th>

                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {schedules.map((row) => (
                                    <tr key={row._id}>
                                        <td>{row.dayscount}</td>
                                        <td>{row.timeslot}</td>
                                        <td>{row.date}</td>
                                        <td>{row.instructor}</td>
                                        <td>{row.section}</td>
                                        {isPdf ? null : (
                                            <>
                                                <td>
                                                    <button className='edit_btn' onClick={() => handleEdit(row._id)}>edit</button>
                                                </td>
                                                <td>
                                                    <button className='delete_btn' onClick={() => handleDelete(row._id)}>delete</button>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>
                </Row>
            </Container>
        </section>
    )

}

export default ScheduleTable;