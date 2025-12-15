/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Teacher = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Subject = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "giáo viên", accessor: "teacher", width: "45%", align: "left" },
      { Header: "môn học", accessor: "subject", align: "left" },
      { Header: "trạng thái", accessor: "status", align: "center" },
      { Header: "ngày vào làm", accessor: "startDate", align: "center" },
      { Header: "hành động", accessor: "action", align: "center" },
    ],

    rows: [
      {
        teacher: <Teacher image={team2} name="Nguyễn Văn An" email="nguyenvanan@school.edu.vn" />,
        subject: <Subject title="Toán học" description="Lớp 10-12" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="hoạt động" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        startDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/2018
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Chỉnh sửa
          </MDTypography>
        ),
      },
      {
        teacher: <Teacher image={team3} name="Trần Thị Bình" email="tranthibinh@school.edu.vn" />,
        subject: <Subject title="Văn học" description="Lớp 10-11" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="nghỉ phép" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        startDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/2019
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Chỉnh sửa
          </MDTypography>
        ),
      },
      {
        teacher: <Teacher image={team4} name="Lê Minh Cường" email="leminhcuong@school.edu.vn" />,
        subject: <Subject title="Vật lý" description="Lớp 11-12" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        startDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/2017
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Chỉnh sửa
          </MDTypography>
        ),
      },
      {
        teacher: <Teacher image={team3} name="Phạm Thị Dung" email="phamthidung@school.edu.vn" />,
        subject: <Subject title="Hóa học" description="Lớp 10-12" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        startDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/2008
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Chỉnh sửa
          </MDTypography>
        ),
      },
      {
        teacher: <Teacher image={team3} name="Hoàng Văn Ế" email="hoangvane@school.edu.vn" />,
        subject: <Subject title="Tiếng Anh" description="Lớp 10-12" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="nghỉ phép" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        startDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/2021
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Chỉnh sửa
          </MDTypography>
        ),
      },
      {
        teacher: <Teacher image={team4} name="Vũ Thị Phương" email="vuthiphuong@school.edu.vn" />,
        subject: <Subject title="Sinh học" description="Lớp 10-11" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="nghỉ phép" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        startDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/2020
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Chỉnh sửa
          </MDTypography>
        ),
      },
    ],
  };
}
