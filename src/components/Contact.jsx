// components/Contact.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: #000; /* 배경색을 검은색으로 설정 */
  color: #fff; /* 텍스트 색상을 흰색으로 설정 */
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #555; /* 테두리 색상 조정 */
  border-radius: 5px;
  background-color: #222; /* 배경색 어둡게 */
  color: #fff;
`;

const TextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
  resize: vertical;
  height: 150px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 전송 로직 추가 가능
    alert("메시지가 성공적으로 전송되었습니다.");
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          연락하기
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="이름" required />
          <Input type="email" name="email" placeholder="이메일" required />
          <TextArea name="message" placeholder="메시지" required />
          <Button type="submit">보내기</Button>
        </Form>
      </Container>
    </ContactSection>
  );
}

export default Contact;
