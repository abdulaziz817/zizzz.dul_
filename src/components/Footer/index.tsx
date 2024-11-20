import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
} from "./styles";
import { Span } from "../Header/styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={src}
      aria-label={src}
    >
      <SvgIcon src={src} width="25px" height="25px" />
    </a>
  );

  const CustomNavLinkSmall = ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <div onClick={onClick} style={{ cursor: "pointer", margin: "8px 0" }}>
      {children}
    </div>
  );

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Kontak")}</Language>
              {/* <Para>{t("Ceritakan Semua Kepada Kami")}</Para> */}


              <Para>{t("Punya pertanyaan? Hubungi kami segera")}</Para>
              <a href="https://wa.me/6287782535212">
                <Chat>{t("Chat Sekarang")}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Kebijakan Website")}</Title>
              <Para>{t("Navigasi Mudah Dipahami")}</Para>
              <Para>{t("Tampilan Ramah Pengguna")}</Para>
              <Para>{t("Transparansi Informasi")}</Para>
              <Para>{t("Pembaruan Rutin")}</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <CustomNavLinkSmall onClick={() => scrollToSection("about")}>
                <Span>{t("Dev")}</Span>
              </CustomNavLinkSmall>
              <CustomNavLinkSmall onClick={() => scrollToSection("mission")}>
                <Span>{t("UI/UX")}</Span>
              </CustomNavLinkSmall>
              <CustomNavLinkSmall onClick={() => scrollToSection("product")}>
                <Span>{t("Designer")}</Span>
              </CustomNavLinkSmall>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Alamat")}</Language>
              <Para>Kp. Sukaseuri</Para>
              <Para>Cikampek Timur</Para>
              <Para>Karawang</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Lihat website lainnya")}</Title>
              <Large
                as="a"
                href="https://zizzzdul.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Portofolio")}
              </Large>
              <Large
                as="a"
                href="https://kilausegar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Kilau Segar")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
                  ABDUL AZIZ
                </h1>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/abdulaziz817"
                src="github.svg"
              />
              <SocialLink href="https://x.com/bangzizzz01" src="twitter.svg" />
              <SocialLink
                href="https://www.linkedin.com/in/abdul-aziz-88b394290/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
