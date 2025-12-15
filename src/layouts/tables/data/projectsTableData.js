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

// @mui material components
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Course = ({ image, name, teacher }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDBox ml={1} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          Giáo viên: {teacher}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Rating = ({ value, maxValue = 5 }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}/{maxValue} sao
      </MDTypography>
    </MDBox>
  );

  const ActionButtons = ({ status }) => {
    if (status === "Chờ duyệt") {
      return (
        <MDBox display="flex" gap={1}>
          <Button
            variant="contained"
            size="small"
            startIcon={<CheckIcon sx={{ color: "#ffffff" }} />}
            sx={{
              minWidth: "80px",
              height: "32px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.8rem",
              backgroundColor: "#4caf50 !important",
              color: "#ffffff !important",
              boxShadow: "0 2px 4px rgba(76, 175, 80, 0.3)",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#45a049 !important",
                boxShadow: "0 4px 8px rgba(76, 175, 80, 0.4)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Duyệt
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<CloseIcon sx={{ color: "#ffffff" }} />}
            sx={{
              minWidth: "80px",
              height: "32px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.8rem",
              backgroundColor: "#f44336 !important",
              color: "#ffffff !important",
              boxShadow: "0 2px 4px rgba(244, 67, 54, 0.3)",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#da190b !important",
                boxShadow: "0 4px 8px rgba(244, 67, 54, 0.4)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Từ chối
          </Button>
          <Button
            variant="contained"
            color="info"
            size="small"
            startIcon={<VisibilityIcon />}
            sx={{
              minWidth: "70px",
              height: "32px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.75rem",
              backgroundColor: "#2196f3 !important",
              color: "#ffffff !important",
              boxShadow: "0 2px 4px rgba(33, 150, 243, 0.3)",
              "&:hover": {
                backgroundColor: "#1976d2 !important",
                boxShadow: "0 4px 8px rgba(33, 150, 243, 0.4)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Xem
          </Button>
        </MDBox>
      );
    }
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<VisibilityIcon />}
        sx={{
          minWidth: "100px",
          height: "32px",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.75rem",
          backgroundColor: "#1976d2 !important",
          color: "#ffffff !important",
          boxShadow: "0 2px 4px rgba(25, 118, 210, 0.3)",
          "&:hover": {
            backgroundColor: "#1565c0 !important",
            boxShadow: "0 4px 8px rgba(25, 118, 210, 0.4)",
            transform: "translateY(-1px)",
          },
        }}
      >
        Xem chi tiết
      </Button>
    );
  };

  return {
    columns: [
      { Header: "khóa học", accessor: "course", width: "35%", align: "left" },
      { Header: "ngày gửi", accessor: "submitDate", align: "left" },
      { Header: "trạng thái", accessor: "status", align: "center" },
      { Header: "uy tín GV", accessor: "teacherRating", align: "center" },
      { Header: "hành động", accessor: "action", align: "center" },
    ],

    rows: [
      {
        course: <Course image={LogoAsana} name="Tiếng Nhật N5 - Cơ bản" teacher="Tanaka Hiroshi" />,
        submitDate: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            15/01/2024 - 14:30
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Chờ duyệt" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        teacherRating: <Rating value={4.5} />,
        action: <ActionButtons status="Chờ duyệt" />,
      },
      {
        course: <Course image={logoGithub} name="Tiếng Nhật N4 - Trung cấp" teacher="Sato Yuki" />,
        submitDate: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            12/01/2024 - 09:15
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Đã duyệt" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        teacherRating: <Rating value={4.8} />,
        action: <ActionButtons status="Đã duyệt" />,
      },
      {
        course: <Course image={logoAtlassian} name="Kanji N5-N4 Cơ bản" teacher="Yamamoto Kenji" />,
        submitDate: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            10/01/2024 - 16:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Từ chối" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        teacherRating: <Rating value={3.2} />,
        action: <ActionButtons status="Từ chối" />,
      },
      {
        course: <Course image={logoSpotify} name="Giao tiếp tiếng Nhật" teacher="Suzuki Akiko" />,
        submitDate: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            18/01/2024 - 11:20
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Chờ duyệt" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        teacherRating: <Rating value={4.9} />,
        action: <ActionButtons status="Chờ duyệt" />,
      },
      {
        course: (
          <Course image={logoSlack} name="Tiếng Nhật N3 - Nâng cao" teacher="Watanabe Miki" />
        ),
        submitDate: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            08/01/2024 - 13:05
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Từ chối" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        teacherRating: <Rating value={3.5} />,
        action: <ActionButtons status="Từ chối" />,
      },
      {
        course: (
          <Course image={logoInvesion} name="Văn hóa & Lịch sử Nhật Bản" teacher="Takahashi Ryo" />
        ),
        submitDate: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20/01/2024 - 08:40
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Đã duyệt" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        teacherRating: <Rating value={4.7} />,
        action: <ActionButtons status="Đã duyệt" />,
      },
    ],
  };
}
