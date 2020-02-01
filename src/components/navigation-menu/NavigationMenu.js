import React from 'react';
import MenuItem from './MenuItem';
const data = [

    {
        name: "Dashboard",
        icon: "fas fa-home",
        url: "/home",
    },
    {
        name: "Entrollment",
        icon: "fas fa-bullhorn",
        url: "enrollment",
        child: [
            {
                name: "Student Enrollment",
                icon: "fas fa-pen",
                url: "/enrollment/student",
            },
            {
                name: "Student",
                icon: "fas fa-pen",
                url: "/student",
            },
            {
                name: "Academic Year",
                icon: "fas fa-pen",
                url: "/academic",
            },
            {
                name: "Programe",
                icon: "fas fa-pen",
                url: "/programe",
            },
            {
                name: "Class",
                icon: "fas fa-pen",
                url: "/class",
            },
        ]
    },
    {
        name: "Fee / Event",
        icon: "fas fa-coins",
        url: "/fee-event",
        child: [
            {
                name: "Event Register",
                icon: "fas fa-pen",
                url: "/event-register",
            },
            {
                name: "Transportation Fee",
                icon: "fas fa-pen",
                url: "/transportation-fee",
            },
            {
                name: "Meal Fee",
                icon: "fas fa-pen",
                url: "/meal-fee",
            }
        ]
    },
    {
        name: "Sale Management",
        icon: "fas fa-coins",
        url: "/sale",
        child: [
            {
                name: "Sale Product",
                icon: "fas fa-coins",
                url: "/sale-item",
            },
            {
                name: "Setup Sell Price",
                icon: "fas fa-coins",
                url: "/sale-price",
            },
            
        ]
    },
    {
        name: "Stock Management",
        icon: "fas fa-cubes",
        url: "/stock",
        child: [
            {
                name: "Create Product",
                icon: "fas fa-box",
                url: "/create-item",
            },
            {
                name: "Purchase Product",
                icon: "fas fa-shopping-basket",
                url: "/create-item",
            },
            {
                name: "Adjust Stock",
                icon: "fas fa-adjust",
                url: "/create-item",
            },
            {
                name: "Create Supplier",
                icon: "fas fa-user-tag",
                url: "/create-item",
            }
        ]
    },
    {
        name: "Academic",
        icon: "fas fa-user-graduate",
        url: "/academic",
        child: [
            {
                name: "Student Score",
                icon: "fas fa-pen",
                url: "/student-score",
            },
            {
                name: "Student Attendance",
                icon: "fas fa-pen",
                url: "/student-attendance",
            }
        ]
    },
    {
        name: "Report",
        icon: "fas fa-chart-area",
        url: "/report",
        child: [
            {
                name: "Home",
                icon: "far fa-circle",
                url: "/home",
            },
            {
                name: "About",
                icon: "far fa-circle",
                url: "/about",
            }
        ]
    },
    {
        name: "Setting",
        icon: "fas fa-cogs",
        url: "setting"
    }

];

function NavigationMenu() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="/" className="brand-link">
                    <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="/" className="d-block">Admin</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                            <MenuItem data={data}></MenuItem>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}


export default NavigationMenu;