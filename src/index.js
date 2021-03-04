import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//Basicamente lo que hace es facilitar la integracion de redux con componentes de react
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Results from './components/results';
import Details from './components/details';

/* Paso 2 se coloca el punto de entrada por eso se genera este index
//Paso 3 se genera una carpera llamada components para guardar componentes y otra carpeta 
//llamda redux
//PAso 4 se importan las librebriar y archivos que se necesitan


//Paso 6 se crea el objeto Root y se crea el arbol de nodos de la aplicacion 
//Paso 7 se genera el BrowserRouter el cual nos permite crear varios puntos de entrada en la 
app
//Paso 8 se crear un Switch que nos permite elegir una ruta (Se tiene 2 rutas en este ejemp)
//Paso 9 se tiene que generar los 2 componentes Results y Details se tiene un redirect en 
donde se redirige de la aplicacion base hacia resultados

//Paso 10 se crean los archivos importados que son ./components/results y ./components/details
// en results se crea un index.js*/

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

//Paso 5 se genera el punto de entrada para la aplicacion
ReactDOM.render(Root, document.getElementById('root'));
/* se el pasa como primer argumento el objeto que representa el nodo y el segundo argumento 
//se le pasa un elemento del DOM

//Paso 23 se configura la aplicacion para que este conectada a redux, por medio de la libreria
// react-redux se encapsulara todo el nodo en un nuevo componente que es provider al cual se 
le tiene que pasar un props que se llama store y el store se le mandara el archivo store por
// lo que se tendra que importar 

//Paso 24  se definen que acciones se van a crear para interactuar con nuestro store o reducer
// en este caso se crearan 3 acciones en la ruta redux/actions una para encontrar resultados
//basados en la caja de texto con la busqueda esta accion se realiza en el archivo findResults
// este encontrara resultados y los almacenara en el reducer llamada results
//findSuggestions la cual nos ayudara a encontrar sugerencia en base a lo que se ingrese y por ultimo
//findCurrentItem esta accion lo que hara basicaente es cuando se eleija un articulo que 
// te manda a una pantalla adicional se esta especificando y almacenando el item actual en el
// estado de la aplicacion y al hacer esto item actual se guarda para poderlo mostrar en la 
siguiente pantalla (cabe mencionar que estas acciones en redux son lo que se conocen como 
actioncreator que basicamente te permite definir una funcion que te regresa un objeto y ese 
objeto es una accion por eso el nombre de actionCreator)


//Paso 25 ubicandonos en redux/action/findCurrentItem en esecnia la accion es una funcion la cual es
// exportada esta funcion recibe en sus parametros un id y lo que regresa la funcion  es una
//accion esta accion tiene un type que se definira y tiene un payload el cual es el id. El tipo de la accion 
debe ser una constante siempre que se exportara y se le pondra el mismo nombre de la accion, el tipo
//sirve para identificar esa accion con ese unico por eso no se pueden repetir

//Paso 26 se hacen lo mismo que el paso 25 para las 2 acciones restantes lo que cambia es 
// en vez de recibir un id recibe un texto(Cabe mencionar que la logica no se define en la action
//si no el reducer), ahora se implementaran en los reducer su respectiva logica

Paso 27 Ahora se implementara una accion en el reducer suggestions, en el cual se guardara 
un arreglo de objetos y cada objeto tendra una sugerencia en caso de querer reaccionar a la accion
findsuggestions 

Paso 28 Se implementara en el index de result que esta dentro de components y ahi se tratara de como
se intrega react-redux en un componente de react, primero se importara connect de la libreria 
react-redux connect nos permite conectar nuestro componente en este caso results para que pueda
acesar al estado de los reducers  y la forma en la que se usa connect es simplente connect recibe 
 2 parametros el primero es conocido como mapStateToProps y el segundo como mapDispapcToProps.
mapStateToProps es una funcion que recibe un estado y ese estado es exactamente nuestro reducer
de nuestro store(es el mismo estado si en redux se llamara store.getState) como se le pasaron 
3 reducer se tendran disponibles esos 3 reducers y en la forma que se quiere acesar todos los 
elementos del reducer suggestions asi que se regresa un objeto con propiedades por ejemplo se quiere
accesar a suggestions y este viene del estado suggestions entonces al especificar esto estamos
regresando cualquier cosa del return se hara disponible como una propiedad en nuestro componente
Ahora utilizadno connect con mapStateToProps se genera Wrapper y este wrapper ocupa saber que 
componente es el que modificara esto hace que wrapper regrese un componente final 
...para conectac el componente con  el reducer se genera una constante desestructurada de this.props y se
pasa a page


Paso 29 se creara un nuevo componente en el directorio llamado appBar, se genera un index.js y page.js un page.js
y un estilo, basandonos en la estructura de index ubicado en results, la clase sera renombrada 
IAppBar

Paso 30 se pasa a la parte grafica del appBar, el appbar sera un contenedor por si solo , en page
se importaran algunos de los componente que se usaran son React, AppBar, Toolbar, typography, AccountCircle, despues
se tienen un componente que esta regresando un appBar que es un componente de material-ui , un
Toolbar, un Typography y un AccountCircle del lado derecho, despues eso se tiene que importar en
la page de results, en page se importa appBar y despues se despliega tambien se implementara
el componente CssBaseLine el cual quita conflicto entre los estilos de la pagina.

Paso 31 se programa el autocomplite en nuentra barra de navegacion para que puedan ver los 
resultados de sugerencias que nos da nuestro input, para implementarlo entre Typography y Acco-
untCircle como Autocomplete este componente se tiene que crear y despues importarla

Paso 32 Se crea la ruta autocomplete y dentro de esta se crean 2 archivo index.js y styles
en index(revisar la logica de este archivo)

Paso 33 se le pasan como propiedasdes text, suggestions, onchangetext y onchageselection al
componenten autocomplete, onchangetext es una funcion que se manda a llamar cada vez que el
texto cambia en la caja de texto y manda el texto que se actualiza y onchangeselection tambien manda
el texto que se actualiza pero esto implica que se manda a llamar solamente cuando el texto sea
seleccionado o sea cuando el usiario de enter o click 

Paso 34 se Definiran las propiedades que se usara page para autocomplete, en index de appBar 
en el cual se definiran dos metodos onchagetext y onchadeselection los cuales se pasaran como
propiedades al componente a igual que text y suggestion, text vendra de un estado loca (const
{text} = this.state y const {suggestions} = this.props), se definira un estado usando un constructor y poniendo text como un
string vacio, al igual que en el constructo se tienen que hacer un vidin a los 2 metodos ya que 
como se pasara a otro componente, ahora se definira una funcion que cambie el texto cada vez
se mande a llamar entonces siemplemente en onchangetext se puede modificar el estado mandando 
el text ( this.state({text})), de esta manera de mantendra actualizado cuando cambie debido al
usuario

Paso 35 se conectara este componente page de appBar de la misma forma que conectamos el contenedor
de results usando un mapStateToProps y usando connect por lo que se tiene que importar, 

Paso 36 regresamos al reducer de suggestion en el cual se esta leyendo los datos, para que 
el flujo sea dinamico se creara una pequeña base de datos usando un helper, se creara
un directorio llamdado data con un archivo  con items, esto para poder accesar informacion sin
tener que crearla nosotros mismos, en esta data hay un arreglo con varios elementos
y cada elemento tiene un id, titulo, imagen y contenido , ahora en el reducer se importara el 
archivo con los elementos. Se filtraran los resultados basados en el input que esta proviendo 
el usuario, lo que se va a hacer es usar una expresion (const regex = new RegExp(`^${payload}`,'i'); i es 
para que no respete mayusculas ni minusculas y la regla que sera que busque todos los elementos 
de este arreglo con el titolo que el usuario proveelo, la palabra tiene que empezar con el 
string de dolares) ahora con el regex se puede regresar un filtrado de todos los elementos
que pasen este (return items.filter( n => regex.test(n.title))) el cual regresara un boleano 
si pasa el filtro regresa true si no falso. Se importa Type as findSuggestions de acciones/f
indSuggestion esto para no especificar el string y se especifica ese objeto o constante.

Paso 37 para poder ver el resultado si funciona o no el filtro se tiene que mandar a llamar la 
accion y esa funcion se puede mandar a llamar en el appBar en suggestions si esta se manda a 
llamar esta emetira una accion a redux redux la intersetaria en el reducer de suggestion y basado
en la informacion de los items filtraria la informacion que si pasan el filtro y al actualizar
este reducer nuestro appBar en index esta conectado con mapStateToProps obtendria los resultados
actualizado y los pasaria a nuestra page y nuestra page lo pasaria a Autocomplete lo mostraria en
la lista final, para poder emitir una accion llamada findSuggestions tenemos que hacer conectar
nuestro componente appBar con la accion, ya se ha implementado mapStateToProps es una funcion
que recibe un state y regresa un objeto y estos objetos  o las propiedades del objeto se hacen 
disponibles al componente por medio de props pues mapDispatchToProps es muy similar lo que hace 
es permite que especifiques ya sea o un objeto y al final vas a terminar con propiedades
y las propiedades deese objeto que vas a regresar se van a hacer disponibles como un props
pero a diferencia de mapStateToProps regresa un state y mapDispatchToProps regresa funciones
que son acciones o creadores de acciones que son las actionCreater. 
Para especificar mapDispatchToProps, la especificacion de redux especifica que si no se necesita
una logica mas compleja se debe usar la forma simple,

pero esta es la compleja ( const = mapDispatch
ToProps (dispatch) =>{return {suggestion:state.suggestion};}; ) es una funcion que recibe un dispatch
 y regresa un objeto y lo que haces es suponiendo que se tiene una accion se importa findSuggestion
 entonces este objeto que regresas findSuggestion que es una funcion  (const = mapDispatch
ToProps (dispatch) =>{return {findsuggestion:()=>dispatch(findSuggestion)};}; ) que hace un 
dispatch de la accion y si la funcion recibe un tecto  se le tiene que pasar como texto
(const = mapDispatchToProps (dispatch) =>{return {findsuggestion:(text)=>
    dispatch(findSuggestion(text))};}; ).  Si se usa mapDispatchToProps como segundo argumento
en connect nos daria una propiedad (findSuggestion), en onchangeText se puede agregar this.props
.findSuggestion(text); y con eso funcionaria el filtro

esta es la simple en vez de definir una funcion simplemente se define un objeto quedaria asi
const mapDispatchToProps = {findSuggestion,}; y esta por el tamaño de la app seria la recomendado
basicamente connect se encarga de hacer toda la conexion el biding a las acciones con el dispatch
y la accion



Paso 38 se ampliara mas la funcionalidad del proyecto los cuales consisten en mostrar 
los resultados de nuestra busqueda en la pantalla el enfoque sera a los archivos del directorio
results se comeinza con el index ya que esta inconcluso se habia conectado nuestro contenedor
por medio de redux, se cambiara suggestions por results, al igual que se tiene que implementar
en page de results, en page en la seccion de fragment solo se tiene CssBaseLine y AppBar, lo 
sigue a continuacion es recibir propiedadespor lo que se hara una desestructuracion con nombre
results, ahora se hara la logica basado en el resultado de results se pondran todos los resultados
en un div con una className que se llama results-page la cual contiene un estilo y padding, y 
dentro se mostraran el resultado, pero solo se mostrara un resultado si realmente existen, por lo 
que se interpolara jxs se creara una variable isEmpty que basicamente significa que esta vacio
el cual es boleano que compara la propiedad length del arreglo si es igual a 0 significa
que esta vacia y si esta vacia lo que queremos mostrar un mensaje que le diga al usuario que
esta vacia de lo contrario queremos mostrar resultados(queda pensiente), despues nos dirigimos
al componente appBar en el index, ahora en el onChangeSelection se agregara algo similar a
onChangeText, onChangeSelection se va a ejecutar cada vez que se le de un click a un item
o cuando el usuario presione enter pero en vez de volver a llamar a findSuggestion se llamara 
a findResults, ahora se tiene que implementar la accion en el reducer en el archivo  results
, en este archivo ahora se copiara lo que se tiene en la logica del suggestion, con eso 
ya se implenten la accion de results, ahora para que se muestren la actualizacion se debe 
programar la logica para cambiar los resultados cuando si existen , ahora vamos a la page 
de results se implementara ahora la estructura para poder mostrar un cambio, se imprimira 
una carta por cada uno de los elementos del arreglo asi que se realizar un map(results.map
item => ) y se va  a crear  como item y se regresara jsx asi que se tiene un div, el cual debe
llevar un key ya que react lo requiere  en este caso se le pasa el id del item y tambien se le pasa 
una className ahora se implementaran unos componentes que se importaran de la libreira
material-ui, las cuales son card, cardActionArea, cardContent y cardMedia, estas carta muestran
una imagen un titulo y text.
Ahora se tiene un card con una clase y dentro de este se tiene un cardActionArea que nos permite
definir una imagen cardMedia a cual se le pasa el item image y de titulo se pasa item.title,
ahora para mostrar el titulo se coloca un cardContent con un componente typography al cual
se les manda unas propiedasdes para dar estilo se pasa el titulo y tambien el contenido y con 
esto se podra ver los resultados, 

Paso 39 ahora se definira que cuando se le de un click a un resultado se mueva de pagina en la que
mostrara los detalles asi que se implementara un onclick en el card de page en results, y 
una funcion( goTo ) se le pasa en onClick a goTo se le pasara la ruta de details/${item.id}
ya que esa ruta fue definida en index del src, ahora para definir goTo, la cual sera
recibida en las propiedades esta funcion esta en index de results. ahora se usara react-router-dom
lo que se hara es definir una forma en la que se pueda navegar a otra pantalla y eso se hace
atravez de un objeto llamado history que vienen en react=dom para poder tener aceso a este se tiene
que importar withRouter, ahora se tiene que encapsular el resultado del connect en withRouter
withRouter se invoca con el resultado de connect y withRouter va a agregar propiedades al componente
como el caso de la propiedad history (export default withRouter(connect(mapStateToProps)
(Results));), ahora se define goTo la cual es una funcion que se puede hacer this.props.history
.push(path) y path se pasa como string entonces goto es un string y hacemos un history.push el cual
nos llevara a la pagina que se pase, en este caso es seria la pagina details con el id del
item, ahora con eso te lleva a la pagina configurada en page details.

Paso 40 nos dirigimos a la ruta index y page de details, se copiara la estructura de results
para no volver a definir todo se renombra result con details, ahora en vez de accesar con
details, no se tiene que accesar a resultados simplemtne accesar una propiedad que se definio
en reducer llamado currentItem a este se le puede acesar atravez del state pero a su vez se 
tendra que especificar un mapDispatchToProps, el cual se define como un objeto con las acciones
a implementar asi que se tiene que importar la accion que viene de redux/actions/findCurrentItem
y se conectara a nuestro componente (const mapDispatchToProps = {findCurrentItem,};) ya que 
se tiene esa accion, algo util que se puede hacer debido a que el usuario puede refrescar la 
pagina se mande a llamar a findCurrentItem ya que de otra forma no tenemos acceso a los items
o al item seleccionado, se observa en el navegador en el url se tiene el item id que fue definido
en la ruta entonces lo que se puede hacer es simplemente nuestro contenedor difinir un metodo
del siclo de vida que se llama componentDidMount() y este se ejecutara cada ves que la pagina 
sea montada o el componente en este caso es la pagina, queremos que el siclo  de vida ejecute
una accion que es findCurrentItem se coloca (this.props.findCurrentItem()) pero se le tiene 
que pasar el id, dentro del objeto withRouter se hacen disponibles unas propiedades como match
por lo que se puede usar (this.props.findCurrentItem(this.props.match.params.itemId)) y dentro de match
viene una propiedad llamada params y params tiene la propiedad itemID, match es el objeto que 
viene de react-router y match tiene parametros de la ruta  y esos parametros dependiendo del
nombre que se haya elegido va a tener esa propiedad en el render se modifica la constante de
la desestructuracion por currentItem

Paso 41 Ahora se tiene que hacer la estructura de la page del directorio details, la estructura 
es parecida a la anterior (revisar logica de page details), se tiene que importar unas dependecias
de material-ui, de importa el appBar, la estructura tiene un CssBaseLine, AppBar que muestra el
autocomplete, y un div que muestra el contenido de la pagina (se tiene que accesar las 
propiedades que fueron pasadas currentItem, goTO) el componente Paper sirve para el estilo, 
tambien se esta mostrando basado en una condicion currentItem, si currentItem esta definido 
se muestra la seccion de Fragment que es el contenido del item si no hay contenido se muestra
un loader, se muestra el titulo, la imagen y el parrafo del contenido al final se tiene un 
boton que cuando se presiona nos manda a la pagina de results con un texto back.

Paso 42 se implementa en los reduces la logica de findCurrentItem, la ruta es reducers/currentItem
en este caso tiene el estado inicial y eso hace que no reaccione a ninguna de las acciones
para que reaccione se implementara la importacion de la accion y el de los items, ahora la accion
se puede implementar en el switch, lo que se ara es que payload debe contener un id y lo que se 
hara es buscar ese id en todos los items y el item que tenga el id queremos que sea el objeto
de ese reducers de esta manera currentItem sera un objeto con el id que fue pasada en el payload
en ese caso se tiene que buscar el item con metodo find (items.find(n => n.id===payload)) el 
id que sea igual a payload( payload viene del params.itemId es un string por lo que se tiene
    que combertir en numero la forma mas facil es por medio de parseInt en el index de details)

Paso 43 cada vez que se de click o enter en una accion se tiene que redirigir al usuario a la 
pantalla anterior o a la pantalla de results asi que lo que se puede hacer es ir a appBar en 
el archivo index y ahi se tiene que hacer un history push para hacerlo se tiene que importar
withRouter y se tiene que conectar al componente connect (withRouter(connect(mapStateToProps, 
mapDispatchToProps)(IAppBar));)  esto se realiza para que tener acceso a history por lo que se
hace en onChangeSelection es this.props.history.push('/results')  







*/