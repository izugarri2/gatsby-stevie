/** @jsxImportSource theme-ui */
import { useEffect } from "react";
import NavBar from "../navbar/navbar";
import Triangles, { Orientation } from "../triangles/triangles";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Button } from "theme-ui";
import { openPopupWidget } from "react-calendly";
import { globalHistory } from "@reach/router";

const MainLayout = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const xRange = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const xRangeNegative = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    return globalHistory.listen(() => {
      window.analytics.page();
    });
  }, []);

  return (
    <>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 6,
        }}
      >
        <NavBar />
        <main
          sx={{ zIndex: 100, width: ["100%", "100%", "1000px"], p: 4, mb: 4 }}
        >
          {children}
        </main>
        <motion.footer
          initial={{ translateY: 30, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          sx={{ p: 3 }}
        >
          <Button
            variant="link"
            onClick={() =>
              openPopupWidget({ url: "https://calendly.com/bobmcc" })
            }
          >
            📆🤙 Let's Talk
          </Button>
        </motion.footer>
      </div>
      <div
        sx={{
          position: "fixed",
          bottom: "-10vh",
          right: "-15vh",
          left: 0,
          zIndex: 1,
          overflowX: "clip",
          height: "15vh",
        }}
      >
        <motion.div
          initial={{ translateX: 20, opacity: 0 }}
          animate={{ translateX: 0, opacity: 0.7 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "inherit",
            bottom: "inherit",
            right: "inherit",
            left: "inherit",
            translateX: xRange,
          }}
        >
          <Triangles
            orientation={Orientation.BOTTOM}
            size={15}
            count={50}
            color="primary"
          />
        </motion.div>
        <motion.div
          initial={{ translateX: -20, opacity: 0 }}
          animate={{ translateX: 0, opacity: 0.7 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "inherit",
            bottom: "inherit",
            right: "inherit",
            left: "inherit",
            translateX: xRangeNegative,
          }}
        >
          <Triangles
            orientation={Orientation.BOTTOM}
            size={15}
            count={20}
            color="secondary"
          />
          <Triangles
            orientation={Orientation.BOTTOM}
            size={15}
            count={10}
            color="orange"
          />
        </motion.div>
      </div>
    </>
  );
};

export default MainLayout;
