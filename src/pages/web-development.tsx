import { Box } from "@mui/material";
import { ContactUsContainer } from "../components/contact-section/contact-us-container";
import { TagLineSection } from "../components/hero-section/tagline-section";
import { TalkToUs } from "../components/hero-section/talk-to-us";
import { WebDevServices } from "../components/scope-section/web-dev-services";
import { TechStack } from "../components/tech-stack/tech-stack";

export const WebDevelopment = () => {
  return (
    <Box sx={{ margin: 0 }}>
      <TagLineSection />
      <TalkToUs />
      <WebDevServices />
      <TechStack />
      <ContactUsContainer />
    </Box>
  );
};
