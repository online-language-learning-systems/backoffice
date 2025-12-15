/**
=========================================================
* Material Dashboard 2 React - Live Clock Component
=========================================================
*/

import { useState, useEffect, useRef } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// @mui material components
import { Card } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const clockRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = clockRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Giới hạn trong viewport
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 120;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "auto";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "auto";
    };
  }, [isDragging, dragOffset]);

  const formatTime = (date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      ref={clockRef}
      onMouseDown={handleMouseDown}
      sx={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        width: "250px",
        backgroundColor: "#ffffff",
        boxShadow: isDragging ? "0 8px 25px rgba(0, 0, 0, 0.2)" : "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "12px",
        border: "2px solid #1976d2",
        cursor: isDragging ? "grabbing" : "grab",
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        transition: isDragging ? "none" : "all 0.2s ease",
        userSelect: "none",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
          transform: isDragging ? "scale(1.05)" : "scale(1.02)",
          borderColor: "#1565c0",
        },
      }}
    >
      <MDBox p={2}>
        <MDBox display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <MDBox display="flex" alignItems="center">
            <AccessTimeIcon sx={{ color: "#1976d2", mr: 1 }} />
            <MDTypography variant="button" fontWeight="bold" color="dark">
              Thời gian hiện tại
            </MDTypography>
          </MDBox>
          <MDBox
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: isDragging ? "#1976d2" : "#e3f2fd",
              borderRadius: "50%",
              transition: "background-color 0.2s ease",
            }}
          />
        </MDBox>
        <MDBox textAlign="center">
          <MDTypography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "#1976d2",
              fontFamily: "'Roboto Mono', monospace",
              letterSpacing: "1px",
            }}
          >
            {formatTime(currentTime)}
          </MDTypography>
          <MDTypography
            variant="caption"
            sx={{
              color: "#666",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            {formatDate(currentTime)}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default LiveClock;
