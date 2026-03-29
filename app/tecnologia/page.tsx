'use client';
import React from 'react';

export default function Tecnologia() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.nextElementSibling) {
      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="hero-grid-bg" />
        <div className="glow-orb orb-cyan orb-l" style={{ opacity: 0.7 }} />
        <span className="section-tag hero-badge-anim">// 04 · STACK TÉCNICO</span>
        <h1 className="hero-title-anim glitch" data-text="NUESTRO ADN TECNOLÓGICO">
          NUESTRO <span>ADN</span> TECNOLÓGICO
        </h1>
        <p className="hero-sub-anim">
          No ensamblamos partes comerciales. Diseñamos, fabricamos y programamos<br />
          cada componente para maximizar el rendimiento en competencia.
        </p>
      </div>

      <section className="section">
        {/* COMPONENTES BASE */}
        <span className="section-tag reveal">// COMPONENTES BASE</span>
        <h2 className="section-title reveal">HARDWARE DE <em>PRECISIÓN</em></h2>
        <div className="section-line reveal" />

        <div className="grid-auto">
          {/* ESP32 */}
          <div className="component-card reveal delay-1">
            <div className="img-slot ratio-3-2" data-lightbox>
              <img src="/images/components/esp32.png" alt="ESP32 Microcontrolador" onError={handleImageError} />
              <div className="placeholder"><span className="ph-icon">🧠</span><p className="ph-name">esp32.png</p><span className="ph-path">images/components/</span></div>
            </div>
            <div className="component-info">
              <div className="component-name">ESP32</div>
              <div className="component-category">// CEREBRO · MICROCONTROLADOR</div>
              <p className="component-desc">Microcontrolador dual-core con conectividad WiFi y Bluetooth de baja latencia. El cerebro de todos nuestros robots.</p>
              <ul className="spec-list">
                <li className="spec-item"><span className="spec-dot">▸</span> Dual core Xtensa LX6 240 MHz</li>
                <li className="spec-item"><span className="spec-dot">▸</span> WiFi 2.4 GHz + Bluetooth 4.2/BLE</li>
                <li className="spec-item"><span className="spec-dot">▸</span> 34 GPIOs programables</li>
              </ul>
            </div>
          </div>

          {/* L298N */}
          <div className="component-card reveal delay-2">
            <div className="img-slot ratio-3-2" data-lightbox>
              <img src="/images/components/l298n.png" alt="Puente H L298N" onError={handleImageError} />
              <div className="placeholder"><span className="ph-icon">⚡</span><p className="ph-name">l298n.png</p><span className="ph-path">images/components/</span></div>
            </div>
            <div className="component-info">
              <div className="component-name">Puente H L298N</div>
              <div className="component-category">// POTENCIA · DRIVER DE MOTOR</div>
              <p className="component-desc">Driver bidireccional de alta corriente para control preciso de motores DC. Permite invertir el sentido de giro y controlar la velocidad.</p>
              <ul className="spec-list">
                <li className="spec-item"><span className="spec-dot">▸</span> Corriente máxima: 2A por canal</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Voltaje: 5V – 35V</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Control PWM de velocidad y dirección</li>
              </ul>
            </div>
          </div>

          {/* Batería */}
          <div className="component-card reveal delay-3">
            <div className="img-slot ratio-3-2" data-lightbox>
              <img src="/images/components/bateria.png" alt="Baterías Li-Ion 12V" onError={handleImageError} />
              <div className="placeholder"><span className="ph-icon">🔋</span><p className="ph-name">bateria.png</p><span className="ph-path">images/components/</span></div>
            </div>
            <div className="component-info">
              <div className="component-name">Celdas Li-Ion 12V</div>
              <div className="component-category">// ENERGÍA · SISTEMA DE POTENCIA</div>
              <p className="component-desc">Sistema de baterías de litio con gestión de corriente optimizada para maximizar autonomía y picos de potencia.</p>
              <ul className="spec-list">
                <li className="spec-item"><span className="spec-dot">▸</span> Voltaje nominal: 12V</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Alta densidad de energía</li>
                <li className="spec-item"><span className="spec-dot">▸</span> BMS para protección de sobredescarga</li>
              </ul>
            </div>
          </div>

          {/* SolidWorks */}
          <div className="component-card reveal delay-1">
            <div className="img-slot ratio-3-2" data-lightbox>
              <img src="/images/components/solidworks.png" alt="Diseño SolidWorks" onError={handleImageError} />
              <div className="placeholder"><span className="ph-icon">🖨️</span><p className="ph-name">solidworks.png</p><span className="ph-path">images/components/</span></div>
            </div>
            <div className="component-info">
              <div className="component-name">SolidWorks + Impresión 3D</div>
              <div className="component-category">// MANUFACTURA · DISEÑO CAD</div>
              <p className="component-desc">Diseño mecánico profesional de chasis, palas y soportes. Impresión 3D en PLA/ABS para prototipado rápido.</p>
              <ul className="spec-list">
                <li className="spec-item"><span className="spec-dot">▸</span> Modelado paramétrico 3D completo</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Impresión en PLA, ABS y PETG</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Tolerancias de ±0.2mm</li>
              </ul>
            </div>
          </div>

          {/* Xbox Controller */}
          <div className="component-card reveal delay-2">
            <div className="img-slot ratio-3-2" data-lightbox>
              <img src="/images/components/xbox-controller.png" alt="Control Xbox Series" onError={handleImageError} />
              <div className="placeholder"><span className="ph-icon">🎮</span><p className="ph-name">xbox-controller.png</p><span className="ph-path">images/components/</span></div>
            </div>
            <div className="component-info">
              <div className="component-name">Control Xbox Series</div>
              <div className="component-category">// INTERFAZ · CONTROL INALÁMBRICO</div>
              <p className="component-desc">Control de videojuego de alta precisión como interfaz de mando. Conectividad Bluetooth de baja latencia.</p>
              <ul className="spec-list">
                <li className="spec-item"><span className="spec-dot">▸</span> 2 joysticks analógicos + gatillos</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Latencia Bluetooth &lt;10ms</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Ergonomía de precisión para piloto</li>
              </ul>
            </div>
          </div>

          {/* Sensores IR */}
          <div className="component-card reveal delay-3">
            <div className="img-slot ratio-3-2" data-lightbox>
              <img src="/images/components/sensor-ir.png" alt="Sensores IR" onError={handleImageError} />
              <div className="placeholder"><span className="ph-icon">📡</span><p className="ph-name">sensor-ir.png</p><span className="ph-path">images/components/</span></div>
            </div>
            <div className="component-info">
              <div className="component-name">Array Sensores IR</div>
              <div className="component-category">// PERCEPCIÓN · SENSORES</div>
              <p className="component-desc">Array de sensores infrarrojos para detección de líneas y bordes de pista. Alta frecuencia de muestreo.</p>
              <ul className="spec-list">
                <li className="spec-item"><span className="spec-dot">▸</span> 8 canales de detección paralela</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Alta velocidad de muestreo</li>
                <li className="spec-item"><span className="spec-dot">▸</span> Detección de borde en sumo autónomo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* INNOVACIÓN ALPHA */}
        <div style={{ height: '56px' }} />
        <span className="section-tag reveal">// DIFERENCIADOR</span>
        <h2 className="section-title reveal">LO QUE NOS <em>SEPARA</em></h2>
        <div className="section-line reveal" />

        <div className="alpha-section reveal">
          <div className="alpha-grid">
            <div className="alpha-text">
              <h3>Fabricación Propia de PCBs</h3>
              <p>No compramos placas comerciales. Fabricamos nuestras propias <strong>PCBs mediante transferencia térmica y soldadura de precisión</strong>, reduciendo costos significativamente y aumentando la confiabilidad al eliminar componentes innecesarios.</p>
              <p>Cada robot tiene una placa diseñada específicamente para su función: rutas de alimentación optimizadas, ubicación estratégica de componentes y conectores propietarios.</p>
              <div style={{ marginTop: '16px' }}>
                <span className="badge badge-orange">⚗️ PCB PROPIA</span>
                <span className="badge badge-cyan">🔬 TRANSFERENCIA TÉRMICA</span>
              </div>
            </div>
            <div className="alpha-gallery">
              <div className="img-slot ratio-1-1" data-lightbox>
                <img src="/images/components/pcb-1.png" alt="PCB propia 1" onError={handleImageError} />
                <div className="placeholder"><span className="ph-icon">🔬</span><p className="ph-name">pcb-1.png</p><span className="ph-path">images/components/</span></div>
              </div>
              <div className="img-slot ratio-1-1" data-lightbox>
                <img src="/images/components/pcb-2.png" alt="PCB propia 2" onError={handleImageError} />
                <div className="placeholder"><span className="ph-icon">⚡</span><p className="ph-name">pcb-2.png</p><span className="ph-path">images/components/</span></div>
              </div>
              <div className="img-slot ratio-1-1" data-lightbox>
                <img src="/images/components/pcb-3.png" alt="PCB soldadura" onError={handleImageError} />
                <div className="placeholder"><span className="ph-icon">🔧</span><p className="ph-name">pcb-3.png</p><span className="ph-path">images/components/</span></div>
              </div>
              <div className="img-slot ratio-1-1" data-lightbox>
                <img src="/images/components/pcb-4.png" alt="PCB terminada" onError={handleImageError} />
                <div className="placeholder"><span className="ph-icon">✅</span><p className="ph-name">pcb-4.png</p><span className="ph-path">images/components/</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="alpha-section reveal" style={{ borderColor: 'var(--cyan)' }}>
          <div className="alpha-grid">
            <div className="alpha-gallery" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="img-slot ratio-1-1" data-lightbox>
                <img src="/images/components/caucho-1.png" alt="Caucho propio 1" onError={handleImageError} />
                <div className="placeholder"><span className="ph-icon">⚙️</span><p className="ph-name">caucho-1.png</p><span className="ph-path">images/components/</span></div>
              </div>
              <div className="img-slot ratio-1-1" data-lightbox>
                <img src="/images/components/caucho-2.png" alt="Caucho propio 2" onError={handleImageError} />
                <div className="placeholder"><span className="ph-icon">🔬</span><p className="ph-name">caucho-2.png</p><span className="ph-path">images/components/</span></div>
              </div>
            </div>
            <div className="alpha-text">
              <h3 style={{ color: 'var(--cyan)' }}>Fórmula de Caucho Propia</h3>
              <p>Desarrollamos nuestra propia <strong>fórmula de caucho para neumáticos</strong> con coeficiente de agarre superior en pistas de Sumo y Fútbol. Los robots comerciales importados no pueden igualar el grip que logramos con nuestra composición.</p>
              <p>El resultado: robots que no resbalan en el empuje de Sumo, y que mantienen trayectorias precisas a alta velocidad en seguidor de línea.</p>
              <div style={{ marginTop: '16px' }}>
                <span className="badge badge-cyan">🧪 FÓRMULA PROPIA</span>
                <span className="badge badge-cyan">💪 AGARRE SUPERIOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* FLUJO DE DESARROLLO */}
        <span className="section-tag reveal" style={{ marginTop: '48px', display: 'block' }}>// PROCESO</span>
        <h2 className="section-title reveal">FLUJO DE <em>DESARROLLO</em></h2>
        <div className="section-line reveal" />

        <div className="workflow reveal">
          <div className="workflow-step">
            <div className="ws-num">01</div>
            <div className="ws-title">DISEÑO CAD</div>
            <p className="ws-desc">Modelado en SolidWorks. Simulación de tolerancias y ensamblaje virtual.</p>
          </div>
          <div className="workflow-step">
            <div className="ws-num">02</div>
            <div className="ws-title">IMPRESIÓN 3D</div>
            <p className="ws-desc">Fabricación de chasis, palas y soportes. Iteración rápida de diseño.</p>
          </div>
          <div className="workflow-step">
            <div className="ws-num">03</div>
            <div className="ws-title">PCB PROPIA</div>
            <p className="ws-desc">Diseño de circuito, transferencia térmica y soldadura de precisión.</p>
          </div>
          <div className="workflow-step">
            <div className="ws-num">04</div>
            <div className="ws-title">PROGRAMACIÓN</div>
            <p className="ws-desc">Código en Arduino/C++ para control, sensores y algoritmos de combate.</p>
          </div>
          <div className="workflow-step">
            <div className="ws-num">05</div>
            <div className="ws-title">PRUEBA</div>
            <p className="ws-desc">Testing en pista simulada. Ajuste de parámetros PID y estrategia.</p>
          </div>
          <div className="workflow-step">
            <div className="ws-num">06</div>
            <div className="ws-title">COMPETENCIA</div>
            <p className="ws-desc">Despliegue en torneos. Análisis post-competencia e iteración.</p>
          </div>
        </div>

        {/* COMPARATIVA */}
        <div className="compare-box reveal" style={{ marginTop: '56px' }}>
          <div className="compare-header">// VENADOS ROBOTICS vs EQUIPOS COMERCIALES</div>
          <div className="compare-row" style={{ background: 'rgba(0,212,255,0.03)' }}>
            <div className="compare-cell label">Aspecto</div>
            <div className="compare-cell label">Equipos Comerciales</div>
            <div className="compare-cell label" style={{ color: 'var(--cyan)' }}>Venados Robotics</div>
          </div>
          <div className="compare-row"><div className="compare-cell label">PCB</div><div className="compare-cell them">Módulos comerciales genéricos</div><div className="compare-cell us">Fabricación propia por transferencia térmica</div></div>
          <div className="compare-row"><div className="compare-cell label">Neumáticos</div><div className="compare-cell them">Caucho estándar de tienda</div><div className="compare-cell us">Fórmula de caucho desarrollada internamente</div></div>
          <div className="compare-row"><div className="compare-cell label">Chasis</div><div className="compare-cell them">Aluminio/acrílico genérico</div><div className="compare-cell us">Diseño paramétrico SolidWorks + 3D</div></div>
          <div className="compare-row"><div className="compare-cell label">Control</div><div className="compare-cell them">Transmisores RC dedicados</div><div className="compare-cell us">Xbox Series + ESP32 Bluetooth</div></div>
          <div className="compare-row"><div className="compare-cell label">Costo</div><div className="compare-cell them">Alto (componentes importados)</div><div className="compare-cell us">Reducido (manufactura propia)</div></div>
          <div className="compare-row"><div className="compare-cell label">Resultado</div><div className="compare-cell them">Dependencia de proveedores</div><div className="compare-cell us">🥇🥈🥉 Podio Continental</div></div>
        </div>

      </section>
    </>
  );
}