import React from "react";

const Contacto = () => {
  return (
    <div className="container bg-dark mt-5 p-5 rounded border border-danger">
      <div class="mb-3">
        <select class="form-select" aria-label="Default select example">
          <option selected>Selecciona una opción</option>
          <option value="1">Retiro en local</option>
          <option value="2">Delivery</option>
          <option value="3">Cumpleaños</option>
          <option value="4">Consulta</option>
        </select>
        <br />
        <label for="exampleFormControlInput1" class="form-label text-white">
          Ingresa tu Correo 
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="nombre@mail.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label text-white">
          Descripción
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="1000 Caracteres"
        ></textarea>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Enviar</button>
</div>
    </div>
  );
};

export default Contacto;
