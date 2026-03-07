// mujer-control.js - VERSIÓN PRODUCCIÓN (solo visible el 8 de marzo)

// --- CONFIGURACIÓN ---
// PRODUCCIÓN: Solo se muestra el 8 de marzo
const MES_OBJETIVO = 2; // Marzo (Enero=0, Febrero=1, Marzo=2)
const DIA_OBJETIVO = 8;

// --- OBTENER FECHA ACTUAL ---
function obtenerFechaActual() {
    const ahora = new Date();
    return {
        dia: ahora.getDate(),
        mes: ahora.getMonth()
    };
}

// --- LÓGICA PRINCIPAL ---
function controlarAcceso() {
    const contenedor = document.getElementById('control-fecha');
    if (!contenedor) return; // Por si no encuentra el elemento
    
    const fechaActual = obtenerFechaActual();
    const es8DeMarzo = (fechaActual.mes === MES_OBJETIVO && fechaActual.dia === DIA_OBJETIVO);

    if (es8DeMarzo) {
        // CONTENIDO ESPECIAL COMPLETO PARA EL 8 DE MARZO
        contenedor.innerHTML = `
            <!-- HERO SECTION CON EFECTO ESPECIAL -->
            <section class="hero-mujer">
                <div class="hero-overlay"></div>
                <div class="hero-contenido">
                    <span class="hero-etiqueta">8 de Marzo</span>
                    <h1>Día Internacional de la Mujer</h1>
                    <p class="hero-lema">Mujeres que inspiran, lideran y transforman Bolivia</p>
                    <div class="hero-decoracion">
                        <i class="fas fa-venus"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-venus"></i>
                    </div>
                </div>
                <div class="hero-fecha-destacada">
                    <span>Hoy conmemoramos su lucha y celebramos sus logros</span>
                </div>
            </section>

            <!-- INTRODUCCIÓN / SIGNIFICADO DEL DÍA -->
            <section class="seccion significado">
                <div class="contenedor-seccion">
                    <h2 class="titulo-seccion">¿Por qué el 8 de marzo?</h2>
                    <div class="significado-contenido">
                        <div class="significado-texto">
                            <p>El Día Internacional de la Mujer conmemora la lucha de las mujeres por su participación en la sociedad y su desarrollo íntegro como personas. Su origen se remonta a las manifestaciones de las trabajadoras textiles a finales del siglo XIX y principios del XX, que exigían mejores condiciones laborales y derecho al voto.</p>
                            <p>En Bolivia, esta fecha adquiere un significado especial, recordando a heroínas como <strong>Adela Zamudio, Juana Azurduy de Padilla</strong> y tantas mujeres anónimas que han construido la historia de nuestro país desde sus hogares, comunidades y espacios de lucha.</p>
                            <p><strong>La Generación Diplomática de Bolivia</strong> se une a esta conmemoración reconociendo el valor, la inteligencia y el liderazgo de las mujeres en el ámbito diplomático, político y social.</p>
                        </div>
                        <div class="significado-datos">
                            <div class="dato-importante">
                                <span class="dato-numero">1977</span>
                                <span class="dato-etiqueta">La ONU proclama el 8M como Día Internacional</span>
                            </div>
                            <div class="dato-importante">
                                <span class="dato-numero">52%</span>
                                <span class="dato-etiqueta">de la población boliviana son mujeres</span>
                            </div>
                            <div class="dato-importante">
                                <span class="dato-numero">1910</span>
                                <span class="dato-etiqueta">Primera celebración internacional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- MUJERES HISTÓRICAS DE BOLIVIA -->
            <section class="seccion mujeres-historicas">
                <div class="contenedor-seccion">
                    <h2 class="titulo-seccion">Mujeres que hicieron historia en Bolivia</h2>
                    <p class="subtitulo-seccion">Pioneras, luchadoras y líderes que marcaron el camino</p>
                    
                    <div class="grilla-biografias">
                        <!-- Tarjeta 1: Juana Azurduy -->
                        <div class="tarjeta-biografia">
                            <div class="imagen-biografia" style="background-image: url('https://www.dropbox.com/scl/fi/lpv9tx2rh4mc08a674nxe/OIP.webp?rlkey=00exxc52ot8210q0p4thq0t0i&st=fzqltzny&dl=1');">
                                <div class="imagen-overlay"></div>
                            </div>
                            <div class="texto-biografia">
                                <h3>Juana Azurduy de Padilla</h3>
                                <span class="rol">Heroína de la Independencia</span>
                                <p>Luchó en las guerras de independencia del Alto Perú (Bolivia). A pesar de haber sido ignorada por la historia oficial durante mucho tiempo, su valentía y liderazgo militar son innegables. Llegó al grado de Teniente Coronela y comandó su propio ejército.</p>
                                <div class="cita-destacada">
                                    <i class="fas fa-quote-left"></i> "No necesito la gloria que otros me puedan dar, mi gloria está en la libertad de mi patria"
                                </div>
                                <div class="legado">
                                    <span class="legado-etiqueta">Legado:</span> Símbolo de la lucha por la independencia
                                </div>
                            </div>
                        </div>

                        <!-- Tarjeta 2: Adela Zamudio -->
                        <div class="tarjeta-biografia">
                            <div class="imagen-biografia" style="background-image: url('https://www.dropbox.com/scl/fi/7pfm3d564q9dibnkpa0x4/adela-zamudio.jpg?rlkey=u97ee2ggwrkk26fnuiiileelf&st=cnwli817&dl=1');">
                                <div class="imagen-overlay"></div>
                            </div>
                            <div class="texto-biografia">
                                <h3>Adela Zamudio</h3>
                                <span class="rol">Escritora y Pionera del Feminismo</span>
                                <p>Poetisa, educadora y pintora cochabambina. A través de su obra literaria y su labor educativa, desafió las normas de su época y abogó incansablemente por la educación y los derechos de la mujer. Su poema "Nacer Hombre" es una crítica mordaz a la desigualdad de género.</p>
                                <div class="cita-destacada">
                                    <i class="fas fa-quote-left"></i> "¡Qué las mujeres no aprendan! ¡Qué las mujeres no lean! ¡Qué las mujeres no piensen!... ¡Pobre humanidad!"
                                </div>
                                <div class="legado">
                                    <span class="legado-etiqueta">Legado:</span> Fundó la primera escuela de arte para mujeres
                                </div>
                            </div>
                        </div>

                        <!-- Tarjeta 3: Domitila Barrios de Chúngara -->
                        <div class="tarjeta-biografia">
                            <div class="imagen-biografia" style="background-image: url('https://www.dropbox.com/scl/fi/ex35rga81rsti16ltiiw5/unnamed.jpg?rlkey=i0yr31x3cs1pncxh6mlz448qh&st=qviu3y4s&dl=1');">
                                <div class="imagen-overlay"></div>
                            </div>
                            <div class="texto-biografia">
                                <h3>Domitila Barrios de Chúngara</h3>
                                <span class="rol">Líder sindical y feminista popular</span>
                                <p>Líder minera y feminista boliviana. Su participación en la Marcha de las Mineras y su intervención en la Tribuna del Año Internacional de la Mujer en 1975 (México) la convirtieron en una voz fundamental de las mujeres trabajadoras y de los sectores populares.</p>
                                <div class="cita-destacada">
                                    <i class="fas fa-quote-left"></i> "Nosotras, las mujeres mineras, no solo queremos ser amas de casa, queremos ser protagonistas de la historia"
                                </div>
                                <div class="legado">
                                    <span class="legado-etiqueta">Legado:</span> Voz de las mujeres trabajadoras y mineras
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- MUJERES CONTEMPORÁNEAS QUE INSPIRAN -->
            <section class="seccion mujeres-contemporaneas">
                <div class="contenedor-seccion">
                    <h2 class="titulo-seccion">Mujeres que inspiran hoy</h2>
                    <p class="subtitulo-seccion">Bolivianas contemporáneas que están transformando el país</p>
                    
                    <div class="grilla-contemporaneas">
                        <div class="tarjeta-contemporanea">
                            <div class="contemporanea-icono">
                                <i class="fas fa-gavel"></i>
                            </div>
                            <h4>Mujeres en la Política</h4>
                            <p>Bolivia ha tenido liderazgos femeninos fundamentales. La Ley de Paridad y Alternancia ha permitido que actualmente más del 50% de los escaños parlamentarios sean ocupados por mujeres, siendo uno de los países con mayor representación femenina en el mundo.</p>
                        </div>
                        
                        <div class="tarjeta-contemporanea">
                            <div class="contemporanea-icono">
                                <i class="fas fa-flask"></i>
                            </div>
                            <h4>Mujeres en la Ciencia</h4>
                            <p>Científicas bolivianas destacan a nivel internacional en áreas como la biomedicina, la astrofísica y la biología. Su trabajo pone en alto el nombre de Bolivia y abre camino para las nuevas generaciones.</p>
                        </div>
                        
                        <div class="tarjeta-contemporanea">
                            <div class="contemporanea-icono">
                                <i class="fas fa-palette"></i>
                            </div>
                            <h4>Mujeres en el Arte</h4>
                            <p>Artistas plásticas, escritoras, cineastas y músicas bolivianas están redefiniendo la cultura nacional con miradas diversas y poderosas, llevando su arte a escenarios internacionales.</p>
                        </div>
                        
                        <div class="tarjeta-contemporanea">
                            <div class="contemporanea-icono">
                                <i class="fas fa-scale-balanced"></i>
                            </div>
                            <h4>Mujeres en la Diplomacia</h4>
                            <p>Cada vez más mujeres representan a Bolivia en el ámbito internacional, ocupando cargos diplomáticos y liderando negociaciones. La diplomacia boliviana tiene rostro de mujer en embajadas, consulados y organismos multilaterales.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- MUJERES EN GDB - SECCIÓN CORREGIDA (texto visible) -->
            <section class="seccion mujeres-gdb">
                <div class="contenedor-seccion">
                    <h2 class="titulo-seccion">Mujeres GDB: Líderes del Mañana</h2>
                    <p class="subtitulo-seccion">En cada comité, en cada debate, las jóvenes de la Generación Diplomática demuestran su capacidad</p>
                    
                    <div class="destacado-gdb">
                        <div class="gdb-estadistica">
                            <span class="gdb-numero">60%</span>
                            <span class="gdb-texto">de nuestros delegados son mujeres</span>
                        </div>
                        <div class="gdb-estadistica">
                            <span class="gdb-numero">2</span>
                            <span class="gdb-texto">departamentos con liderazgo femenino</span>
                        </div>
                        <div class="gdb-estadistica">
                            <span class="gdb-numero">+150</span>
                            <span class="gdb-texto">jóvenes formadas en diplomacia</span>
                        </div>
                    </div>
                    <p class="mensaje-gdb"> "En GDB, cada joven mujer es una promesa de liderazgo, una voz que se alza con fuerza y una inspiración para las futuras generaciones. Celebramos su talento, su compromiso y su pasión por construir un mejor Bolivia."</p>
                </div>
            </section>

            <!-- LÍNEA DE TIEMPO: HITOS DE LA MUJER EN BOLIVIA -->
            <section class="seccion linea-tiempo">
                <div class="contenedor-seccion">
                    <h2 class="titulo-seccion">Hitos en la lucha por los derechos de las mujeres en Bolivia</h2>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-ano">1938</div>
                            <div class="timeline-contenido">
                                <h4>Primera Convención de Mujeres</h4>
                                <p>Se realiza en La Paz, sentando las bases del movimiento feminista organizado en Bolivia.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-ano">1952</div>
                            <div class="timeline-contenido">
                                <h4>Voto femenino</h4>
                                <p>Tras la Revolución Nacional, se reconoce el derecho al voto para las mujeres (inicialmente solo para alfabetas).</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-ano">1979</div>
                            <div class="timeline-contenido">
                                <h4>Día de la Mujer Boliviana</h4>
                                <p>Se instituye el 11 de octubre como el "Día de la Mujer Boliviana" en honor al nacimiento de Adela Zamudio, reconociendo su lucha por los derechos de las mujeres en el país.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-ano">1999</div>
                            <div class="timeline-contenido">
                                <h4>Ley de Protección a la Víctima</h4>
                                <p>Se promulga la Ley N° 1674, una de las primeras leyes en Latinoamérica contra la violencia doméstica, estableciendo medidas de protección para las mujeres.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-ano">2009</div>
                            <div class="timeline-contenido">
                                <h4>Nueva Constitución</h4>
                                <p>La CPE reconoce la equidad de género y prohíbe la discriminación, sentando bases para leyes posteriores.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-ano">2010</div>
                            <div class="timeline-contenido">
                                <h4>Ley Contra el Acoso Político</h4>
                                <p>Ley 243 para sancionar el acoso y la violencia política hacia las mujeres.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-ano">2024</div>
                            <div class="timeline-contenido">
                                <h4>Presente y futuro</h4>
                                <p>Las jóvenes de GDB continúan formándose como las líderes diplomáticas del mañana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- MENSAJE FINAL Y LLAMADO A LA ACCIÓN -->
            <section class="seccion mensaje-final">
                <div class="contenedor-seccion">
                    <div class="mensaje-destacado">
                        <i class="fas fa-venus-mars"></i>
                        <h3>La igualdad no es solo un derecho, es el camino</h3>
                        <p>En GDB creemos en un futuro donde las mujeres y hombres construyan juntos la diplomacia y el liderazgo de Bolivia.</p>
                        <p><strong>Hoy las celebramos. Mañana, seguimos trabajando juntos.</strong></p>
                        
                        <div class="hashtags-finales">
                            <span>#MujeresGDB</span>
                            <span>#DiplomaciaFemenina</span>
                            <span>#8M</span>
                            <span>#MujeresBolivianas</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- PIE DE PÁGINA CON ENLACE DE VOLVER -->
            <footer class="footer-mujer">
                <a href="index.html" class="boton-volver">
                    <i class="fas fa-arrow-left"></i> Volver al inicio de GDB
                </a>
                <p class="footer-texto">Generación Diplomática de Bolivia · 8 de Marzo · Día Internacional de la Mujer</p>
            </footer>
        `;
    } else {
        // CONTENIDO PARA CUANDO NO ES 8 DE MARZO
        const diasRestantes = calcularDiasRestantes(fechaActual);
        const mensajeDias = diasRestantes > 0 ? `Faltan ${diasRestantes} días` : 'Vuelve el próximo 8 de marzo';
        
        contenedor.innerHTML = `
            <div class="mensaje-fuera-fecha">
                <div class="icono-principal">🌹</div>
                <h2>Contenido Especial No Disponible</h2>
                <p>Esta página está dedicada exclusivamente al <strong>Día Internacional de la Mujer</strong> y solo se habilita el 8 de marzo.</p>
                <div class="fecha-destacada">
                    8 de marzo
                </div>
                <p class="mensaje-dias-restantes">${mensajeDias}</p>
                
                <div class="datos-curiosos">
                    <h4>¿Sabías que...?</h4>
                    <p>🇧🇴 Bolivia es uno de los países con mayor representación parlamentaria femenina en el mundo.</p>
                </div>
                
                <a href="index.html" class="boton-volver-mini">
                    <i class="fas fa-arrow-left"></i> Volver al inicio
                </a>
                
                <p class="nota-prueba" style="margin-top: 30px; font-size: 0.8rem; color: #999; border-top: 1px solid #eee; padding-top: 15px;">
                    <em>⚡ Este contenido solo está disponible el 8 de marzo.</em>
                </p>
            </div>
        `;
    }
}

// Función para calcular días restantes hasta el 8 de marzo
function calcularDiasRestantes(fechaActual) {
    const anioActual = new Date().getFullYear();
    const fechaObjetivo = new Date(anioActual, 2, 8); // 8 de marzo
    
    const hoy = new Date(anioActual, fechaActual.mes, fechaActual.dia);
    
    if (hoy > fechaObjetivo) {
        fechaObjetivo.setFullYear(anioActual + 1);
    }
    
    const diferenciaMs = fechaObjetivo - hoy;
    return Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
}

// --- EJECUTAR AL CARGAR LA PÁGINA ---
window.addEventListener('DOMContentLoaded', controlarAcceso);