import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { TFunction } from "i18next";

// Mendefinisikan tipe untuk nilai form
interface FormValues {
  name: string;
  email: string;
  message: string;
}

// Mendefinisikan tipe props untuk komponen Kontak
export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: TFunction;
}

const validate = (values: FormValues) => {
  const errors: { name?: string; email?: string; message?: string } = {};

  if (!values.name) {
    errors.name = "Nama harus diisi!";
  }

  if (!values.email) {
    errors.email = "Email harus diisi!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email tidak valid!";
  }

  if (!values.message) {
    errors.message = "Pesan harus diisi!";
  } else if (values.message.length < 10) {
    errors.message = "Pesan harus minimal 10 karakter!";
  }

  return errors;
};

const Kontak = ({ title, content, id, t }: ContactProps) => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const { name = "", email, message } = values;
      const waMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/6287782535212?text=${waMessage}`;
      window.open(waUrl, '_blank');
    } else {
      console.log("Form contains errors, cannot submit.");
    }
  };

  const TipeValidasi = ({ type }: { type: string }) => {
    const PesanError = errors[type as keyof typeof errors];
    return <Span>{PesanError}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off">
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={values.name}
                  onChange={handleChange}
                />
                <TipeValidasi type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email Anda"
                  value={values.email}
                  onChange={handleChange}
                />
                <TipeValidasi type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Tulis Pesan Anda"
                  value={values.message}
                  name="message"
                  onChange={handleChange}
                />
                <TipeValidasi type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit" onClick={onSubmit}>{t("Kirim")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Kontak);
