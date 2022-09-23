import React from "react";

const Productos = () => {
  return (
    <div className="container bg-dark">
      <div class=" card bg-dark text-black mt-3 pt-3 ">
        <img
          src="https://www.paulinacocina.net/wp-content/uploads/2022/04/selva-negra-receta-1-800x534.jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay text-info">
          <h5 class="card-title ">Torta de crema y chocolate</h5>
          <p class="card-text">
          Te conquistaremos con el delicioso sabor de nuestras tortas, las más ricas, las más sabrosas…
          </p>
          <p class="card-text">¡Un delicioso y rico pastel!</p>
        </div>
      </div>
      <div class="card bg-dark text-black mt-3">
        <img
          src="https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-arcoiris.png"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay text-success">
          <h5 class="card-title">Torta multisabor</h5>
          <p class="card-text">
          Todo lo que está bien en este mundo se resume en el sabor de nuestros pasteles únicos.
          </p>
          <p class="card-text">El pastel a todos hace bien...</p>
        </div>
      </div>
      <div class="card bg-dark text-black mt-3">
        <img
          src="https://www.lavanguardia.com/files/image_948_465/uploads/2016/10/20/5e99808a18e61.jpeg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay text-warning">
          <h5 class="card-title">Torta de chocolate</h5>
          <p class="card-text">
          No puedes comprar la felicidad, pero sí nuestras tortas. Después de probarlas querrás más y más. La máxima felicidad te harán experimentar de sobra.
          </p>
          <p class="card-text">¡Las sorpresas se llevan en pastel!</p>
        </div>
      </div>
      <div class="card bg-dark text-black mt-3 mb-3 pb-3">
        <img
          src="https://www.cucinare.tv/wp-content/uploads/2022/08/Torta-1000x563.jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay text-black">
          <h5 class="card-title">Torta de Jamón</h5>
          <p class="card-text">
          Todos los días alguien en alguna parte está de cumpleaños ¿No es esa razón más que suficiente para comer un rico pastel y con ello deleitarte y celebrarlo?
          </p>
          <p class="card-text">Barriguita llena de nuestras ricas tortas, <br /> corazón relleno de felicidad grandiosa...</p>
        </div>
      </div>
    </div>
  );
};

export default Productos;
