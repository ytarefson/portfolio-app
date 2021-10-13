import React from 'react';

const EmployeeCard = (props) => {
    return (
        <>
            <div className="employee-card">
                <div className="image-container">
                    <img src={`http://localhost:1337${props.employee.image.url}`} title={`${props.employee.surname} ${props.employee.name} ${props.employee.patronymic}`} alt="Фото сторудника" className="image-person" />
                </div>
                <div className="text-wrapper">
                    <span className="text mb-1">{props.employee.status}</span>
                    <span className="min-title">
                    {`${props.employee.surname} ${props.employee.name} ${props.employee.patronymic}`}
                    </span>
                    <div className="grid-row">
                        <div className="phone-container">
                            <span className="min-text mb-0 phone-title">Телефон:</span>
                            <span className="text mb-0 phone-value">{props.employee.phone}</span>
                        </div>
                        <div className="mail-container">
                            <span className="min-text mb-0 mail-title">Почта:</span>
                            <span className="text mb-0 mail-value">{props.employee.email}</span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .employee-card {
                    margin: 0;
                    padding: 15px;
                    background-color: white;
                    display: grid;
                    align-items: center;
                    grid-template-columns: 60px 1fr;
                    gap: 20px;
                }
                .image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                    overflow: hidden;
                    box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
                }
                .image-person {
                    width: auto;
                    height: 100%;
                    object-fit: cover;
                }
                .grid-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-auto-rows: auto;
                    grid-auto-flow: row;
                }
                .phone-container, .mail-container {
                    display: flex;
                    align-items: flex-end;
                }
                .mail-container {
                    text-align: right;
                }
                .mail-value, .phone-value {
                    color: var(--grey-9)!important;
                }
                .text {
                    color: var(--grey-5);
                }
                .min-text {
                    color: var(--grey-4);
                    margin-right: 3px;
                }
                @media (min-width: 768px) {
                    .grid-row {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 1fr;
                        gap: 3px;
                    }
                }
            `}</style>
        </>
    )
}
export default EmployeeCard;
