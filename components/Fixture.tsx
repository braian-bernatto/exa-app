import { fixtures } from "@/constants";
import { Fixture } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";

interface Props {
  datos: Fixture;
}

const Fixture = ({ datos }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {/* select */}
      <div className="grid grid-cols-3 place-items-center w-full">
        <select className="select select-bordered select-sm max-w-xs">
          <option disabled selected>
            Fecha
          </option>
          <option>Fecha 6</option>
          <option>Fecha 5</option>
          <option>Fecha 4</option>
          <option>Fecha 3</option>
          <option>Fecha 2</option>
          <option>Fecha 1</option>
        </select>

        <div className="w-[90px] h-[90px] relative flex-none">
          <Image
            src="/img/aso-dmd.png"
            fill
            alt="aso logo"
            className="object-contain"
          />
        </div>

        <h2 className="rounded-md bg-white p-1 px-3 text-sm font-semibold">
          22/07/2023
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {datos.equipos.map((equipo, idx) => (
          <div key={idx} className="flex items-center w-[350px] sm:w-[500px] relative">
            <span className="absolute w-[90%] left-[50%] translate-x-[-50%] h-7 bg-white z-0 shadow rounded-full"></span>
            <div className="z-10 flex justify-between items-center w-full">
              <Image
                src={`/img/${equipo.team1.data.logo}`}
                width={70}
                height={70}
                alt="Equipo Logo"
              />
              <h3 className="text-[10px] text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none">
                {equipo.team1.data.name}
              </h3>
              <span className="font-bold rounded-full border shadow-md h-[55px] w-[55px] p-2 flex items-center justify-center bg-white">
                {equipo.team1.goals?`${equipo.team1.goals}-${equipo.team2.goals}`: equipo.horaInicio? dayjs(equipo.horaInicio).format('HH:mm'): 
                <div className="w-[20px] h-[20px] rounded-full overflow-hidden flex items-center justify-center"><div className="bg-red-500 w-2 h-2 rounded-full animate-pulse"></div></div>}
              </span>
              <h3 className="text-[10px] text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none">
                {equipo.team2.data.name}
              </h3>
              <Image
                src={`/img/${equipo.team2.data.logo}`}
                width={70}
                height={70}
                alt="Equipo Logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixture;
