/** @jsxImportSource theme-ui */
import { Flex, Link } from "@theme-ui/components";
import { Link as GLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import GitIcon from "../../images/svgs/git.svg";
import LinkedinIcon from "../../images/svgs/linkedin.svg";
import PdgaIcon from "../../images/svgs/pdga.svg";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      sx={{
        width: ["100%", "100%", "100%", "1280px"],
        px: 4,
        pt: 4,
      }}
    >
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          flex: 1,
        }}
      >
        <Flex sx={{ alignItems: "center" }}>
          <StaticImage
            src="../../images/me.jpg"
            sx={{
              width: ["70px", "100px"],
              height: ["70px", "100px"],
              minWidth: "70px",
              borderRadius: "100%",
              zIndex: 0,
              mr: 2,
            }}
            alt="Bob McCracken"
          />
          <Flex
            sx={{
              mr: 2,
              flexDirection: "column",
            }}
          >
            <div
              sx={{
                fontWeight: "heading",
                fontSize: 5,
                whiteSpace: "nowrap",
              }}
            >
              Bob McCracken
            </div>
            <div>
              <Link
                href="https://github.com/bobmccracken"
                sx={{ variant: "links.social" }}
                aria-label="Bob McCracken's GitHub"
              >
                <GitIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/robert-mccracken-a2098428"
                sx={{ variant: "links.social" }}
                aria-label="Bob McCracken's Linked In"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://www.pdga.com/player/75372"
                sx={{
                  variant: "links.social",
                }}
                aria-label="Bob McCracken's PDGA"
              >
                <PdgaIcon />
              </Link>
            </div>
          </Flex>
        </Flex>

        <Flex sx={{ alignItems: "center", my: 1 }}>
          <div sx={{ whiteSpace: "nowrap" }}>
            <GLink
              to="/"
              activeClassName="active"
              sx={{
                color: "secondary",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                "&.active": { textDecoration: "underline" },
                mr: 3,
              }}
            >
              About
            </GLink>
            <GLink
              to="/resume/"
              activeClassName="active"
              sx={{
                color: "secondary",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                "&.active": { textDecoration: "underline" },
              }}
            >
              Resume
            </GLink>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
