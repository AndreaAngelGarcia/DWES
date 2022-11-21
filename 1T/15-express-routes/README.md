### #️⃣1️⃣5️⃣ EXPRESSJS: Peticiones, respuestas y enrutamiento.

---


#### EJERCICIOS CASA

    Realizar un solo servidor en el que programar todos los ejercicios, separados por sus rutas:   -> index.js
    
    1. /header recoger he imprimir por consola un parámetro llamado token
        • Si no está definido, devolver la respuesta con el código 401 y un objeto
    
            {
            "code": 401,
            "error": "Unauthorized",
            "message": "Error: Set a token to login"
            }
    
    2. /params crear un parámetro llamado name en la ruta y devolver Hola ${name}
    
    3. /query enviar un número n y devolver la suma de todos los números desde el 1 hasta el número
    recibido.
        • Si el número no se define, se tomará 100 por defecto.
    
    4. /body Imprimir todo el objeto entrante en una lista HTML en el que se muestren todos los
    parámetros: su clave y su valor.

    5. /animals Crear un enrutador bajo dicha ruta establecer los siguientes endpoint:
        • /animals/dog devuelve un objeto { "grow": "guau guau"}
        • /animals/cat devuelve un objeto { "grow": "miau"}
        • /animals/bird devuelve un objeto { "grow": "pio pio"}
    
    6. El resto de rutas, han de devolver el código 404 con un objeto en la respuesta:
    
            {
            "code": 404,
            "error": "Not Found",
            "message": "Error: Path not found"
            }
