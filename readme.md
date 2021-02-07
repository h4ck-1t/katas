# Setup

#### Software

    Git Bash + Git GUI
    Visual Studio Code
    Nodejs

#### Plataformas

    Github

#### Configuración

###### Git y github

Primero necesitamos conectar Git con Github, para esto vamos a utilizar el protocolo ssh.
Este nos permitirá realizar acciones con git de forma segura a través de la terminal.

1.  Abrí la terminal con Git Bash

2.  Pega el siguiente texto, y agrega tu dirección de correo electrónico.

        ` $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

        Esto crea una nueva clave ssh usando el correo electrónico proporcionado como etiqueta.

    > Generating public/private rsa key pair.

        Cuando se te indique "Ingresar un archivo donde guardar la clave", presiona `Intro`. Al 	hacerlo aceptas la ubicación predeterminada del archivo. La terminal te responderá algo como esto:

        > Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

        Por el momento, podes saltarte la inserción de la una contraseña. Pero te recomiendo 		informarte sobre cómo añadirla después
        > Enter passphrase (empty for no passphrase): [Type a passphrase]
        > Enter same passphrase again: [Type passphrase again]

3.  Agregar tu clave SSH al ssh-agent

    Antes de agregar una nueva clave SSH al ssh-agent para gestionar tus claves, debes haber comprobado las claves SSH existentes y agregar luego una nueva clave SSH.

    Inicia el agente SSH en segundo plano.

    `$ eval "$(ssh-agent -s)"`

    > Agent pid 59566

    Ahora sí, agrega tu llave privada SSH al ssh-agent. Si creaste tu llave con un nombre distinto, o si estás agregando una llave existente que tiene un nombre distinto. Recordá que `~/.ssh/id_rsa` es el nombre que se le dá por defecto a las llaves ssh, y esta misma la que vas a utilizar para utilizarla con Github

    `$ ssh-add ~/.ssh/id_rsa`

4.  Ahora sí añadí la llave a Github

    - andá a la configuracion de cuenta
    - en la sección "SSH and GPG keys" seleccioná "Create SSH Key"
    - colocá como título el nombre de tu dispositivo
    - pegá el código de tu** llave publica **
    - es muy importante que pegues tu **llave publica** que tiene una extension **.pub** por default el nombre del archivo es `id_rsa.pub`. Lo podés abrir con un editor de texto.

5.  No olvidemos de configurar basicamente la terminal, antes de empezar a codear:

    - `git config --global user.name "Tu nombre"`

    - `git config --global user.email tu@email.com`

    - `git config --global user.editor vim`

#### Configurando el VSCode

El editor de código es la herramienta que más vamos a utilizar, y está buenisimo ir adaptandola a nuestros gustos.
Agregar shurcuts, herramientas, temas. Todo esto nos facilita el _work-flow_ y terminamos codeando más felices.

Recomiendo algunas extensiones muy buenas, y algunos detalles de setup que a mí facilitaron la vida.

Extensiones

     Bracket Pair Colorizer
     ident-rainbow
     Live Server
     file-icons
     Prettier
     Babel Javascript
     Live Share Extended Edition (x4pack)
     Spanish Language
     Todo Tree

Configuraciones

Prettier nos ayuda a formatear el código y mantener un codestyle homogeneo.
Para automatizar eso, podemos setear la configuracion de prettier, para que formatee cuando guardás el archivo.
Esto es buscando las configuraciones

- Editor: Default Formatter -> esbenp.prettier-vscode
- Editor: Format on save -> On

El que más recomiendo es para comentar y decomentar líneas.
Yo lo uso en el `cntrl + mayus + a `.
La configuración se llama "Alternar comentario de línea"

También es importante configurarlo la integración de vscode con github, para que sincronice nuestras configuraciones, y también nos permita utilizar la extensión live-share.
Desde el engranaje en la barra de herramientas, le damos clic a sincronizar y configuramos todo.

Claro que acá deben faltar más configuraciones, y van a ir surgiendo nuevas (y desconocidas para mi) que se adapten a tus usos. Principalmente pasa eso con los shorcuts. Asi que tranqui, que si no entendés qué tocar para que todo ande mejor, ya lo vas a ir descubriendo. Y lo que te funcione a vos, quizása otrx no le funcione tanto.

#### Nodejs

Instalar la ultima versión y darle todo a siguiente...siguiente...siguiente...
