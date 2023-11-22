"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Dashboard() {
  
  const [ descripcion_vino, setDescripcion_vino ] = useState(true);
  const [ referencia, setReferencia ] = useState(false);
  const [ info_nutricional, setInfo_nutricional ] = useState(false);
  const [ ingredientes_vino, setIngredientes_vino ] = useState(false);
  const [ materiales_botella, setMateriales_botella ] = useState(false);
  const [ pie_imprenta, setPie_imprenta ] = useState(false);

  const referencia_true = () => {
    setDescripcion_vino(false);
    setReferencia(true);
    setInfo_nutricional(false);
    setIngredientes_vino(false);
    setMateriales_botella(false);
    setPie_imprenta(false);
  }

  const info_nutricional_true = () => {
    setDescripcion_vino(false);
    setReferencia(false);
    setInfo_nutricional(true);
    setIngredientes_vino(false);
    setMateriales_botella(false);
    setPie_imprenta(false);
  }

  const ingredientes_vino_true = () => {
    setDescripcion_vino(false);
    setReferencia(false);
    setInfo_nutricional(false);
    setIngredientes_vino(true);
    setMateriales_botella(false);
    setPie_imprenta(false);
  }

  const materiales_botella_true = () => {
    setDescripcion_vino(false);
    setReferencia(false);
    setInfo_nutricional(false);
    setIngredientes_vino(false);
    setMateriales_botella(true);
    setPie_imprenta(false);
  }

  const pie_imprenta_true = () => {
    setDescripcion_vino(false);
    setReferencia(false);
    setInfo_nutricional(false);
    setIngredientes_vino(false);
    setMateriales_botella(false);
    setPie_imprenta(true);
  }

  const [alcohol, setAlcohol] = useState("0");
  const [azucar_residual, setAzucar_residual] = useState("0");
  const [acidez, setAcidez] = useState("0");
  const [energia, setEnergia] = useState("0");
  const [energiaKj, setEnergiaKj] = useState("0");
  const [carbohidratos, setCarbohidratos] = useState("0");
  const [azucar, setAzucar] = useState("0");
  const [grasa, setGrasa] = useState("0");
  const [grasa_saturada, setGrasa_saturada] = useState("0");
  const [proteina, setProteina] = useState("0");
  const [sal, setSal] = useState("0");
  const [nombreVino, setNombreVino] = useState("");
  const [variedadUva, setVariedadUva] = useState("");
  const [anada, setAnada] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [pais, setPais] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div>
      <div className="w-7/12 pl-10 inline-block">
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <li className={`flex items-center ${descripcion_vino ? "text-blue-600 dark:text-blue-500" : "text-gray-500 dark:text-gray-400"}  space-x-2.5`}>
              <span className={`flex items-center justify-center w-8 h-8 border ${descripcion_vino ? "border-blue-600 dark:border-blue-500" : "border-gray-500 dark:border-gray-400"}  rounded-full shrink-0`}>
                  1
              </span>
              <span>
                  <h3 className="font-medium leading-tight">Descripción del vino</h3>
                  <p className="text-sm"></p>
              </span>
          </li>
          <li className={`flex items-center ${referencia ? "text-blue-600 dark:text-blue-500" : "text-gray-500 dark:text-gray-400"}  space-x-2.5`}>
              <span className={`flex items-center justify-center w-8 h-8 border ${referencia ? "border-blue-600 dark:border-blue-500" : "border-gray-500 dark:border-gray-400"}  rounded-full shrink-0`}>
                  2
              </span>
              <span>
                  <h3 className="font-medium leading-tight">Números de referencia internos</h3>
                  <p className="text-sm"></p>
              </span>
          </li>
          <li className={`flex items-center ${info_nutricional ? "text-blue-600 dark:text-blue-500" : "text-gray-500 dark:text-gray-400"}  space-x-2.5`}>
              <span className={`flex items-center justify-center w-8 h-8 border ${info_nutricional ? "border-blue-600 dark:border-blue-500" : "border-gray-500 dark:border-gray-400"}  rounded-full shrink-0`}>
                  3
              </span>
              <span>
                  <h3 className="font-medium leading-tight">Información nutricional</h3>
                  <p className="text-sm"></p>
              </span>
          </li>
        </ol>
      {descripcion_vino && 
        <div>
          <div className="pt-10">
            <form action="#">
              <h1 className="text-gray-900 text-xl font-semibold">Asistente de entrada</h1>
              <p>Aquí puede introducir información sobre su vino, como el nombre o la variedad de uva. Sin embargo, esta información es opcional y <b>no es legalmente obligatoria</b>.</p>
              <br />
              <h1 className="text-gray-900 text-xl font-semibold">Información del vino</h1>
              <div className="py-5 grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                      <input onChange={(e) => setNombreVino( e.target.value )} type="text" name="vino_name" id="vino_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre de tu vino" />
                  </div>
                  <div>
                      <input onChange={(e) => setVariedadUva( e.target.value )} type="test" name="variedad_uva" id="variedad_uva" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tipo de uva" />
                  </div>
                  <div>
                      <input onChange={(e) => setAnada( e.target.value )} type="text" name="anada" id="anada" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Año" />
                  </div>                        
                  <div>
                      <input onChange={(e) => setCantidad( e.target.value )} type="text" name="cantidad" id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ml/cl/l" />
                  </div>
                  <div>
                      <input onChange={(e) => setPais( e.target.value )} type="text" name="pais" id="pais" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pais" />
                  </div>
                  <div>
                      <input onChange={(e) => setRegion( e.target.value )} type="text" name="region" id="region" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Región" />
                  </div>
              </div>
              <button onClick={referencia_true} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Siguiente paso: Números de referencia internos
              </button>
            </form>
          </div> 
        </div>
      }
      {referencia &&
        <div>
          <div className="pt-10">
            <form action="#">
              <h1 className="text-gray-900 text-xl font-semibold">Asistente de entrada</h1>
              <p>Asistente de entrada
              Aquí puede utilizar el número AP y el ID de vino para la referenciación interna. Sin embargo, esta información es opcional y <b>no es legalmente obligatoria</b>.</p>
              <div className="py-5 grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <input type="text" name="numero_prueba" id="numero_prueba" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Número de prueba" />
                  <input
                    className="relative float-left mr-[6px] mt-5 h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="checkboxDefault" />
                  <label
                    className="inline-block pl-[0.15rem] mt-4 hover:cursor-pointer">
                    Mostrar en webapp
                  </label>
                </div>
                <div>
                  <input type="text" name="vino_id" id="vino_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-72 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID del vino" />
                  <input
                    className="relative float-left mr-[6px] mt-5 h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="checkboxDefault" />
                  <label
                    className="inline-block pl-[0.15rem] mt-4 hover:cursor-pointer">
                    Mostrar en webapp
                  </label>
                </div>
              </div>
              <button onClick={info_nutricional_true} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Siguiente paso: Información nutricional
              </button>
            </form>
          </div>
        </div>
      }
      {info_nutricional &&
        <div>
          <div className="pt-9">
            <form action="#">
              <div className="py-0 grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <h1 className="font-semibold text-md">
                    ¡Descarga la plantilla para subir tu archivo de laboratorio!
                  </h1>
                  <button className="mt-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Plantilla</span>
                  </button>
                </div>
                <div>
                  <h1 className="font-semibold text-md mb-4">
                    Sube tu informe de laboratorio
                  </h1>
                  <input
                    className="relative m-0 block min-w-0 w-72 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFile" />
                </div>
              </div>
              <div className="grid gap-4 mb-0 sm:grid-cols-6">
                <div>
                  <h1 className="font-medium text-md mt-10">
                    Valores requeridos
                  </h1>
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Alcohol (%vol)
                  </h1>
                  <input onChange={(e) => setAlcohol( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alcohol %" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Azúcar residual
                  </h1>
                  <input onChange={(e) => setAzucar_residual( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0 g/L" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Acidez
                  </h1>
                  <input onChange={(e) => setAcidez( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0 g/L" />
                </div>
              </div>
              <div className="grid gap-4 mb-0 sm:grid-cols-6">
                <div>
                  <h1 className="font-medium text-sm mt-7">
                    Valores calculados <span className="block font-light text-sm">(por 100ml)</span>
                  </h1>
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Energía
                  </h1>
                  <input value={(Math.round((parseFloat(alcohol.replace(",", ".")))*5.6584 + (parseFloat(azucar_residual.replace(",", ".")) * 4 / 10 + (parseFloat(acidez.replace(",", "."))) * 3 / 10))).toString() + " kcal"} onChange={(e) => setEnergia( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Energía
                  </h1>
                  <input value={(Math.round((parseFloat(alcohol.replace(",", ".")))*5.6584) * 4.184).toFixed().toString() + " kjul"} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Carbohidratos
                  </h1>
                  <input value={((Math.round(parseFloat(alcohol.replace(",", "."))*0.67) * 100 / 1000) + (parseFloat(azucar_residual.replace(",", ".")) / 10)).toFixed(1).toString() + " g"} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Azúcar
                  </h1>
                  <input value={((parseFloat(azucar_residual.replace(",", "."))) / 10).toString() + " g"} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-6">
                <div>
                  <h1 className="font-medium text-sm mt-7">
                    Pequeñas cantidades <span className="block font-light text-sm">(g/100ml)</span>
                  </h1>
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Grasa
                  </h1>
                  <input onChange={(e) => setGrasa( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Grasa saturada
                  </h1>
                  <input onChange={(e) => setGrasa_saturada( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Proteína
                  </h1>
                  <input onChange={(e) => setProteina( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
                <div>
                  <h1 className="font-light text-sm mt-5">
                    Sal
                  </h1>
                  <input onChange={(e) => setSal( e.target.value )} type="text" name="informe_laboratorio" id="informe_laboratorio" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
                </div>
              </div>
              <div>
                <input
                  className="relative float-left mt-5 h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="checkboxDefault" />
                <label
                  className="inline-block pl-[0.15rem] mt-4 hover:cursor-pointer">
                  Combinar pequeñas cantidades
                </label>
              </div>
              <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Siguiente paso: Ingredientes del vino
              </button>
            </form>
          </div>
        </div>
      }
      </div>
      <div className="w-3/12 ml-20 p-10 absolute h-3/4 rounded-3xl shadow-2xl shadow-slate-300 bg-slate-50 inline-block">
        

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {!nombreVino ? ("") : (
          <div className="p-3">
            <h1 className="text-lg font-bold">{nombreVino} {anada ? " (" + anada + ")" : ""}</h1>
            <h4 className="text-md">{pais} {region ? " - " + region : ""}</h4>
            <h4 className="text-sm font-light">{variedadUva}</h4>
            <h4 className="text-sm font-light">{cantidad ? cantidad + " ml" : ""}</h4>
          </div>
        )}
        <div className="h-5/6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                {alcohol != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Alcohol (%)
                      </th>
                      <td className="px-6 py-4">
                          {alcohol}
                      </td>
                  </tr>
                  ) : ("")}
                  {azucar_residual != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Azúcar residual
                      </th>
                      <td className="px-6 py-4">
                          {azucar_residual}
                      </td>
                  </tr>
                  ) : ("")}
                  {acidez != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Acidez
                      </th>
                      <td className="px-6 py-4">
                          {acidez}
                      </td>
                  </tr>
                  ) : ("")}
                  {alcohol != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Energía
                      </th>
                      <td className="px-6 py-4">
                          {(Math.round((parseFloat(alcohol.replace(",", ".")))*5.6584) * 4.184).toFixed().toString() + " kjul"}<br />
                          {(Math.round((parseFloat(alcohol.replace(",", ".")))*5.6584 + (parseFloat(azucar_residual.replace(",", ".")) * 4 / 10 + (parseFloat(acidez.replace(",", "."))) * 3 / 10))).toString() + " kcal"}
                      </td>
                  </tr>
                  ) : ("")}
                  {alcohol != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Carbohidratos
                      </th>
                      <td className="px-6 py-4">
                          {((Math.round(parseFloat(alcohol.replace(",", "."))*0.67) * 100 / 1000) + (parseFloat(azucar_residual.replace(",", ".")) / 10)).toFixed(1).toString() + " g"}
                      </td>
                  </tr>
                  ) : ("")}
                  {azucar_residual != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Azúcar
                      </th>
                      <td className="px-6 py-4">
                          {((parseFloat(azucar_residual.replace(",", "."))) / 10).toString() + " g"}
                      </td>
                  </tr>
                  ) : ("")}
                  {grasa != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Grasa
                      </th>
                      <td className="px-6 py-4">
                          {grasa}
                      </td>
                  </tr>
                  ) : ("")}
                  {grasa_saturada != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Grasa saturada
                      </th>
                      <td className="px-6 py-4">
                          {grasa_saturada}
                      </td>
                  </tr>
                  ) : ("")}
                  {proteina != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Proteína
                      </th>
                      <td className="px-6 py-4">
                          {proteina}
                      </td>
                  </tr>
                  ) : ("")}
                  {sal != "0" ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Sal
                      </th>
                      <td className="px-6 py-4">
                          {sal}
                      </td>
                  </tr>
                  ) : ("")}
              </tbody>
          </table>
        </div>
    </div>
  </div>
</div>
  )
}
