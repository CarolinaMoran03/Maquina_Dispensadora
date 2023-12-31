function mostrarInfo(productoId) {
    var producto = document.getElementById(productoId);
    var infoProducto = producto.querySelector('.product-info');

    // Muestra u oculta la información del producto
    infoProducto.classList.toggle('visible');
}
