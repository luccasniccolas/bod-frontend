// components/ProductForm.tsx

import React, { useState } from "react";
import styles from "./ProductForm.module.css"; // Importar estilos CSS

const ProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [imagenes, setImagenes] = useState<{ nombre: string, url: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Construir URLs de imágenes usando el nombre proporcionado por el usuario
      const imagenesUrls = imagenes.map(imagen => `/images/productos/${imagen.nombre}`);

      const formData = {
        nombre,
        descripcion,
        precio,
        categoriaId,
        imagenesUrls,
      };

      

      const response = await fetch("http://localhost:3001/api/productos/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Producto subido exitosamente:", data);
        // Aquí podrías redirigir o mostrar un mensaje de éxito
      } else {
        const errorData = await response.json();
        console.error("Error al subir el producto:", errorData.message);
        // Manejar errores
      }
    } catch (error) {
      console.error("Error al subir el producto:", error);
      // Manejar errores
    }
  };

  const handleImagenesInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImagenes = Array.from(e.target.files).map((file) => ({
        nombre: file.name, // Usar el nombre del archivo como nombre de la imagen
        url: URL.createObjectURL(file),
      }));
      setImagenes([...imagenes, ...newImagenes]); // Agregar nuevas imágenes al estado existente
    }
  };

  const handleNombreChange = (index: number, nombre: string) => {
    const updatedImagenes = [...imagenes];
    updatedImagenes[index].nombre = nombre;
    setImagenes(updatedImagenes);
  };

  const handleEliminarImagen = (index: number) => {
    const updatedImagenes = [...imagenes];
    updatedImagenes.splice(index, 1);
    setImagenes(updatedImagenes);
  };

  return (
    <form className={styles.productForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del producto"
        required
      />
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
        required
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio"
        required
      />
      <select
        value={categoriaId}
        onChange={(e) => setCategoriaId(e.target.value)}
        required
      >
        <option value="">Selecciona una categoría</option>
        <option value="1">Polerones</option>
        <option value="2">Poleras</option>
        <option value="3">Pantalones</option>
        <option value="4">Otros</option>
      </select>
      <input
        type="file"
        onChange={handleImagenesInputChange}
        accept="image/*"
        multiple
      />
      {imagenes.map((imagen, index) => (
        <div key={index} className={styles.imagenInput}>
          <input
            type="text"
            value={imagen.nombre}
            onChange={(e) => handleNombreChange(index, e.target.value)}
            placeholder={`Nombre de la imagen ${index + 1}`}
            required
          />
          <img src={imagen.url} alt={`Imagen ${index + 1}`} className={styles.imagenPreview} />
          <button
            type="button"
            className={styles.eliminarButton}
            onClick={() => handleEliminarImagen(index)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <button type="submit" className={styles.submitButton}>Subir Producto</button>
    </form>
  );
};

export default ProductForm;
