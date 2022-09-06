import { ContainerImgUnid, ContainerInfoUnid, UnidadeContainer } from "./unidadeInfoStyle";
import Medico from "../../assets/img/bancodeimagens/Medicina Geral (15).jpg";
import { MdOutlinePlace } from "react-icons/md";

import { TbReportMedical } from "react-icons/tb";

const UnidadeInfoComponent = () => {
  return (
    <UnidadeContainer>
      <div className="container">
        <ContainerImgUnid key="1-Container">
          <img src={Medico} alt="Imagem aparelho de ressonancia magnetica" />
        </ContainerImgUnid>
        <ContainerInfoUnid key="2-Container">
          <h1>Conheça nossas unidades</h1>
          <h2>
            <MdOutlinePlace /> Unidade Campo Largo
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            deleniti eos nemo excepturi rerum at voluptatum ad veniam,
            repellendus quia eligendi consequuntur rem aliquid eum nostrum id
            labore maxime recusandae?
          </p>

          <h2>
            <MdOutlinePlace /> Unidade Rio Claro
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            deleniti eos nemo excepturi rerum at voluptatum ad veniam,
            repellendus quia eligendi consequuntur rem aliquid eum nostrum id
            labore maxime recusandae?
          </p>

          <h1>Disponivel em todas unidades:</h1>
          <ul>
            <li key="List-1">
              <h3>
                <TbReportMedical />
              </h3>
              Exames Laboratoriais;
            </li>
            <li key="List-2">
              <h3>
                <TbReportMedical />
              </h3>
              Exames de Imagem ;
            </li>
            <li key="List-3">
              <h3>
                <TbReportMedical />
              </h3>
              Exames de Toxicológicos;
            </li>
            <li key="List-4">
              <h3>
                <TbReportMedical />
              </h3>
              Ressonância Magnética;
            </li>
          </ul>
        </ContainerInfoUnid>
      </div>
    </UnidadeContainer>
  );
};

export default UnidadeInfoComponent;