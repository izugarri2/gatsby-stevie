import { A11y, Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "theme-ui";
import Skill from "../skill/skill";

const cardSx = { width: ["100px", "150px"], height: ["100px", "150px"] };
const wrapperSx = {
  ".swiper": {
    paddingBottom: "40px",
    ".swiper-slide": {
      flexShrink: 1,
    },
    ".swiper-pagination-bullet-active": {
      backgroundColor: "primary",
    },
  },
};

const SkillSwiper = ({ skills, currentSkill, setCurrentSkill }) => {
  return (
    <Box sx={wrapperSx}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay, A11y]}
        effect={"coverflow"}
        a11y={{
          enabled: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          depth: 100,
          slideShadows: false,
        }}
        pagination={true}
        spaceBetween={20}
        initialSlide={currentSkill}
        onSlideChange={(swiper) => setCurrentSkill(swiper.activeIndex)}
      >
        {skills.map(({ icon, name }) => (
          <SwiperSlide key={name}>
            <Skill
              icon={<Box sx={{ width: "50px", height: "50px" }}>{icon}</Box>}
              name={name}
              cardSx={cardSx}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SkillSwiper;
