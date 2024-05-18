import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import RatingForm from "@/components/rating";
import React from "react";

const RatingPage = () => {
  return (
    <>
      <ProfessorGuard>
        <Layout>
          {" "}
          <RatingForm></RatingForm>
        </Layout>
      </ProfessorGuard>
    </>
  );
};

export default RatingPage;
