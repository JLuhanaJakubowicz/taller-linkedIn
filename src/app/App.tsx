import { useState } from 'react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('Argentina');
  const [city, setCity] = useState('');
  const [situation, setSituation] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const steps = [
    {
      title: "Ingresar a LinkedIn",
      subtitle: "Abrí tu navegador y andá a la página oficial",
      pillLabel: "Ingresar",
      icon: "ti-world",
      render: () => (
        <>
          <div className="browser">
            <div className="browser-bar">
              <div className="dots">
                <div className="dot dot-r"></div>
                <div className="dot dot-y"></div>
                <div className="dot dot-g"></div>
              </div>
              <div className="url-bar">https://www.linkedin.com</div>
            </div>
            <div className="browser-content">
              <div className="li-header">
                <span className="li-wordmark">in</span>
                <div className="li-btn-row">
                  <button className="li-btn-o" onClick={() => alert('Redirigiendo a inicio de sesión...')}>
                    Iniciar sesión
                  </button>
                  <button className="li-btn-p" onClick={() => setCurrentStep(1)}>
                    Unirse ahora
                  </button>
                </div>
              </div>
              <p className="li-hero-h">Da la bienvenida a tu futuro profesional</p>
              <p className="li-hero-s">Conectá con colegas, empresas y oportunidades de todo el mundo.</p>
            </div>
          </div>
          <div className="tip-box">
            <i className="ti ti-info-circle"></i>
            <span>Siempre ingresá desde <strong>linkedin.com</strong> (el sitio oficial). Evitá hacer clic en links de mails desconocidos que digan ser de LinkedIn.</span>
          </div>
          <div className="checklist">
            <div className="check-item"><i className="ti ti-circle-check"></i>Abrí tu navegador favorito (Chrome, Firefox, Edge o Safari).</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Escribí <strong>linkedin.com</strong> en la barra de direcciones y presioná Enter.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Vas a ver la pantalla de bienvenida con dos botones: <em>Iniciar sesión</em> y <em>Unirse ahora</em>.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Hacé clic en <strong style={{color: 'var(--li-blue)'}}>Unirse ahora</strong> para empezar el registro.</div>
          </div>
        </>
      )
    },
    {
      title: "Crear tu cuenta",
      subtitle: "Completá el formulario con tu correo y una contraseña segura",
      pillLabel: "Registro",
      icon: "ti-user-plus",
      render: () => (
        <>
          <div className="browser">
            <div className="browser-bar">
              <div className="dots">
                <div className="dot dot-r"></div>
                <div className="dot dot-y"></div>
                <div className="dot dot-g"></div>
              </div>
              <div className="url-bar">https://www.linkedin.com/signup</div>
            </div>
            <div className="browser-content">
              <p style={{fontSize: '17px', fontWeight: 600, marginBottom: '14px'}}>Únete a LinkedIn</p>
              <div className="form-stack">
                <div className="field-group">
                  <label className="field-label">Correo electrónico</label>
                  <input
                    className={`field-input ${activeInput === 'email' ? 'active-field' : ''}`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setActiveInput('email')}
                    onBlur={() => setActiveInput(null)}
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Contraseña (mínimo 6 caracteres)</label>
                  <input
                    className={`field-input ${activeInput === 'password' ? 'active-field' : ''}`}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setActiveInput('password')}
                    onBlur={() => setActiveInput(null)}
                    placeholder="Contraseña"
                  />
                </div>
                <button
                  className="li-btn-p"
                  style={{width: '100%', padding: '10px', fontSize: '14px'}}
                  onClick={() => {
                    if (email && password.length >= 6) {
                      setCurrentStep(2);
                    } else {
                      alert('Por favor completá el correo y una contraseña de al menos 6 caracteres');
                    }
                  }}
                >
                  Aceptar y unirte
                </button>
              </div>
              <p style={{fontSize: '11px', color: '#888', textAlign: 'center'}}>Al hacer clic aceptás el Acuerdo de usuario y la Política de privacidad de LinkedIn.</p>
            </div>
          </div>
          <div className="warn-box">
            <i className="ti ti-alert-triangle"></i>
            <span>Usá una contraseña segura: combiná mayúsculas, números y un símbolo especial. No la reutilices en otros servicios.</span>
          </div>
          <div className="checklist">
            <div className="check-item"><i className="ti ti-circle-check"></i>Ingresá tu correo electrónico válido — lo vas a necesitar para verificar la cuenta.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Elegí una contraseña de al menos 6 caracteres. Más larga = más segura.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Hacé clic en <strong style={{color: 'var(--li-blue)'}}>Aceptar y unirte</strong> para continuar.</div>
          </div>
        </>
      )
    },
    {
      title: "Datos personales",
      subtitle: "Tu nombre real y ubicación para que te encuentren",
      pillLabel: "Perfil",
      icon: "ti-id-badge",
      render: () => (
        <>
          <div className="browser">
            <div className="browser-bar">
              <div className="dots">
                <div className="dot dot-r"></div>
                <div className="dot dot-y"></div>
                <div className="dot dot-g"></div>
              </div>
              <div className="url-bar">https://www.linkedin.com/signup/details</div>
            </div>
            <div className="browser-content">
              <p style={{fontSize: '15px', fontWeight: 600, marginBottom: '14px'}}>Completá tu perfil básico</p>
              <div className="form-stack">
                <div className="field-row">
                  <div className="field-group">
                    <label className="field-label">Nombre</label>
                    <input
                      className={`field-input ${activeInput === 'firstName' ? 'active-field' : ''}`}
                      type="text"
                      placeholder="Ej: Ana"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onFocus={() => setActiveInput('firstName')}
                      onBlur={() => setActiveInput(null)}
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Apellido</label>
                    <input
                      className={`field-input ${activeInput === 'lastName' ? 'active-field' : ''}`}
                      type="text"
                      placeholder="Ej: García"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onFocus={() => setActiveInput('lastName')}
                      onBlur={() => setActiveInput(null)}
                    />
                  </div>
                </div>
                <div className="field-group">
                  <label className="field-label">País o región</label>
                  <input
                    className={`field-input ${activeInput === 'country' ? 'active-field' : ''}`}
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    onFocus={() => setActiveInput('country')}
                    onBlur={() => setActiveInput(null)}
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Ciudad</label>
                  <input
                    className={`field-input ${activeInput === 'city' ? 'active-field' : ''}`}
                    type="text"
                    placeholder="San Miguel de Tucumán"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onFocus={() => setActiveInput('city')}
                    onBlur={() => setActiveInput(null)}
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">¿Cuál es tu situación laboral actual?</label>
                  <select
                    className={`field-input ${activeInput === 'situation' ? 'active-field' : ''}`}
                    value={situation}
                    onChange={(e) => setSituation(e.target.value)}
                    onFocus={() => setActiveInput('situation')}
                    onBlur={() => setActiveInput(null)}
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="student">Estudiante universitario/a</option>
                    <option value="employed">Empleado/a</option>
                    <option value="freelance">Freelancer</option>
                    <option value="unemployed">Buscando empleo</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <button
                  className="li-btn-p"
                  style={{width: '100%', padding: '10px', fontSize: '14px', marginTop: '6px'}}
                  onClick={() => {
                    if (firstName && lastName && country && city && situation) {
                      setCurrentStep(3);
                    } else {
                      alert('Por favor completá todos los campos');
                    }
                  }}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
          <div className="tip-box">
            <i className="ti ti-info-circle"></i>
            <span>Usá tu nombre real. LinkedIn es una red profesional — reclutadores y colegas te van a buscar por tu nombre verdadero. Los alias o apodos pueden perjudicarte.</span>
          </div>
          <div className="checklist">
            <div className="check-item"><i className="ti ti-circle-check"></i>Ingresá tu nombre y apellido tal como aparecen en tu documento.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Seleccioná tu país (<em>Argentina</em>) y ciudad.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Elegí tu situación laboral actual — si estudiás, seleccioná <em>Estudiante universitario/a</em>.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Hacé clic en <strong style={{color: 'var(--li-blue)'}}>Continuar</strong>.</div>
          </div>
        </>
      )
    },
    {
      title: "Verificar tu correo",
      subtitle: "LinkedIn te envía un código de 6 dígitos para confirmar tu identidad",
      pillLabel: "Verificar",
      icon: "ti-mail-check",
      render: () => (
        <>
          <div className="browser">
            <div className="browser-bar">
              <div className="dots">
                <div className="dot dot-r"></div>
                <div className="dot dot-y"></div>
                <div className="dot dot-g"></div>
              </div>
              <div className="url-bar">https://www.linkedin.com/signup/verify</div>
            </div>
            <div className="browser-content" style={{textAlign: 'center', padding: '1.5rem'}}>
              <i className="ti ti-mail" style={{fontSize: '40px', color: 'var(--li-blue)', marginBottom: '10px', display: 'block'}}></i>
              <p style={{fontSize: '16px', fontWeight: 600, marginBottom: '5px'}}>Verificá tu dirección de correo</p>
              <p style={{fontSize: '13px', color: '#666', marginBottom: '1.25rem'}}>Enviamos un código de 6 dígitos a <strong>{email || 'tu@email.com'}</strong></p>
              <div className="otp-wrap">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    className={`otp-cell ${digit ? 'filled' : ''}`}
                    value={digit}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d*$/.test(val)) {
                        const newOtp = [...otp];
                        newOtp[idx] = val;
                        setOtp(newOtp);
                        // Auto-focus next input
                        if (val && idx < 5) {
                          const nextInput = e.target.parentElement?.children[idx + 1] as HTMLInputElement;
                          nextInput?.focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      // Handle backspace
                      if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
                        const prevInput = e.target.parentElement?.children[idx - 1] as HTMLInputElement;
                        prevInput?.focus();
                      }
                    }}
                    style={{
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      textAlign: 'center',
                      caretColor: 'var(--li-blue)'
                    }}
                  />
                ))}
              </div>
              <button
                className="li-btn-p"
                style={{padding: '9px 32px', fontSize: '14px', marginTop: '4px'}}
                onClick={() => {
                  if (otp.every(d => d !== '')) {
                    setCurrentStep(4);
                  } else {
                    alert('Por favor ingresá el código de 6 dígitos');
                  }
                }}
              >
                Verificar
              </button>
              <p style={{marginTop: '12px', fontSize: '12px', color: '#888'}}>
                ¿No recibiste el mail?{' '}
                <span
                  style={{color: 'var(--li-blue)', cursor: 'pointer'}}
                  onClick={() => {
                    setOtp(['', '', '', '', '', '']);
                    alert('Código reenviado a ' + (email || 'tu correo'));
                  }}
                >
                  Reenviar código
                </span>
              </p>
            </div>
          </div>
          <div className="warn-box">
            <i className="ti ti-alert-triangle"></i>
            <span>Revisá tu carpeta de <strong>spam o correo no deseado</strong> si no ves el mail en la bandeja principal. El código vence en 15 minutos.</span>
          </div>
          <div className="success-box">
            <i className="ti ti-circle-check"></i>
            <span>Una vez verificado, ¡tu cuenta queda activa! Serás redirigido automáticamente a tu nuevo perfil.</span>
          </div>
          <div className="checklist">
            <div className="check-item"><i className="ti ti-circle-check"></i>Abrí tu cliente de correo y buscá un mail de <em>LinkedIn</em> con el asunto "Tu código de verificación".</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Copiá el código de 6 dígitos e ingresalo en el formulario de LinkedIn.</div>
            <div className="check-item"><i className="ti ti-circle-check"></i>Hacé clic en <strong style={{color: 'var(--li-blue)'}}>Verificar</strong> y esperá la confirmación.</div>
          </div>
        </>
      )
    },
    {
      title: "¡Cuenta creada! Primeros pasos",
      subtitle: "Lo que tenés que hacer el día uno para destacar en LinkedIn",
      pillLabel: "¡Listo!",
      icon: "ti-confetti",
      render: () => (
        <>
          <div className="profile-card">
            <div className="profile-cover"></div>
            <div className="profile-inner">
              <div className="profile-ava">
                {firstName && lastName ? (
                  <span style={{fontSize: '24px', fontWeight: 600, color: 'var(--li-blue)'}}>
                    {firstName[0]}{lastName[0]}
                  </span>
                ) : (
                  <i className="ti ti-user"></i>
                )}
              </div>
              <div className="profile-name">
                {firstName && lastName ? `${firstName} ${lastName}` : 'Tu Nombre'}
              </div>
              <div className="profile-headline">
                {situation === 'student'
                  ? 'Estudiante universitario/a'
                  : situation === 'employed'
                  ? 'Empleado/a'
                  : situation === 'freelance'
                  ? 'Freelancer'
                  : situation === 'unemployed'
                  ? 'Buscando empleo'
                  : situation === 'other'
                  ? 'Profesional'
                  : 'Tu ocupación'} · {city || 'Tu ciudad'}, {country}
              </div>
              <button
                className="li-connect-btn"
                onClick={() => alert('¡Conexión enviada! 🎉')}
              >
                <i className="ti ti-plus" style={{fontSize: '13px'}}></i> Conectar
              </button>
            </div>
          </div>
          <div className="success-box">
            <i className="ti ti-circle-check"></i>
            <span>¡Tu cuenta fue creada exitosamente! Ahora construí tu presencia profesional — las primeras horas son clave para que el algoritmo de LinkedIn te muestre a más personas.</span>
          </div>
          <p style={{fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Cuatro acciones prioritarias</p>
          <div className="next-grid">
            <div
              className="next-item"
              style={{cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'}}
              onClick={() => alert('Abriendo cargador de foto de perfil...')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="ti ti-camera"></i>
              <div className="ni-title">Foto de perfil</div>
              <div className="ni-desc">Foto profesional, fondo neutro. Aumenta hasta 21× las visitas a tu perfil.</div>
            </div>
            <div
              className="next-item"
              style={{cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'}}
              onClick={() => alert('Abriendo editor de titular profesional...')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="ti ti-pencil"></i>
              <div className="ni-title">Titular profesional</div>
              <div className="ni-desc">Más allá de tu título: contá qué hacés y qué valor aportás en pocas palabras.</div>
            </div>
            <div
              className="next-item"
              style={{cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'}}
              onClick={() => alert('Abriendo buscador de contactos...')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="ti ti-users"></i>
              <div className="ni-title">Primeras conexiones</div>
              <div className="ni-desc">Importá contactos o buscá compañeros y profesores de tu facultad en UNSTA.</div>
            </div>
            <div
              className="next-item"
              style={{cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'}}
              onClick={() => alert('Abriendo formulario de educación y experiencia...')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="ti ti-briefcase"></i>
              <div className="ni-title">Educación y experiencia</div>
              <div className="ni-desc">Agregá tus estudios en UNSTA y cualquier experiencia laboral o voluntariado.</div>
            </div>
          </div>
          <div className="tip-box" style={{marginBottom: 0}}>
            <i className="ti ti-bulb"></i>
            <span>Los perfiles completos reciben hasta <strong>40× más oportunidades</strong> que los incompletos. Vale la pena dedicarle 30 minutos el primer día.</span>
          </div>
        </>
      )
    }
  ];

  const pct = Math.round(((currentStep + 1) / steps.length) * 100);
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --li-blue: #0A66C2;
          --li-blue-dark: #0856A8;
          --li-blue-light: #E8F0FE;
          --li-blue-border: #B5D4F4;
          --success-bg: #EAF3DE;
          --success-border: #C0DD97;
          --success-text: #3B6D11;
          --warn-bg: #FAEEDA;
          --warn-border: #FAC775;
          --warn-text: #633806;
          --border: #e0e0e0;
          --border-light: #f0f0f0;
          --text-primary: #1a1a1a;
          --text-secondary: #666;
          --text-hint: #999;
          --bg: #f4f2ee;
          --surface: #ffffff;
          --surface-secondary: #f8f8f6;
          --radius-sm: 6px;
          --radius-md: 10px;
          --radius-lg: 14px;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text-primary);
        }

        .tutorial-container {
          background: var(--bg);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem 4rem;
        }

        .page-header {
          width: 100%;
          max-width: 720px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 2rem;
        }

        .li-logo-badge {
          width: 44px;
          height: 44px;
          background: var(--li-blue);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -1px;
          flex-shrink: 0;
        }

        .page-header-text h1 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .page-header-text p {
          font-size: 13px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .progress-wrap {
          width: 100%;
          max-width: 720px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
        }

        .progress-track {
          flex: 1;
          height: 5px;
          background: var(--border);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--li-blue);
          border-radius: 99px;
          transition: width 0.45s cubic-bezier(.4,0,.2,1);
        }

        .progress-label {
          font-size: 12px;
          color: var(--text-secondary);
          white-space: nowrap;
          min-width: 52px;
          text-align: right;
        }

        .steps-nav {
          width: 100%;
          max-width: 720px;
          display: flex;
          gap: 6px;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .step-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          user-select: none;
        }

        .step-pill:hover { background: var(--surface-secondary); }

        .step-pill.active {
          background: var(--li-blue);
          color: #fff;
          border-color: var(--li-blue);
        }

        .step-pill.done {
          background: var(--success-bg);
          color: var(--success-text);
          border-color: var(--success-border);
        }

        .step-pill .pill-num {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-pill:not(.active) .pill-num {
          background: var(--border-light);
          color: var(--text-secondary);
        }

        .step-pill.done .pill-num {
          background: var(--success-border);
          color: var(--success-text);
        }

        .card {
          width: 100%;
          max-width: 720px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 1.25rem 1.5rem;
          background: var(--surface-secondary);
          border-bottom: 1px solid var(--border-light);
        }

        .step-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--li-blue);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-header-text .title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .card-header-text .subtitle {
          font-size: 13px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .card-body {
          padding: 1.5rem;
          animation: fadeUp 0.3s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .browser {
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.25rem;
        }

        .browser-bar {
          background: #f1f1f1;
          border-bottom: 1px solid var(--border);
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dots { display: flex; gap: 5px; }
        .dot { width: 11px; height: 11px; border-radius: 50%; }
        .dot-r { background: #FF5F57; }
        .dot-y { background: #FEBC2E; }
        .dot-g { background: #28C840; }

        .url-bar {
          flex: 1;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 4px 10px;
          font-size: 12px;
          color: var(--text-secondary);
          font-family: monospace;
        }

        .browser-content {
          padding: 1rem 1.25rem;
          background: #fff;
        }

        .li-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0 10px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .li-wordmark {
          font-size: 22px;
          font-weight: 800;
          color: var(--li-blue);
          letter-spacing: -1px;
        }

        .li-btn-row { display: flex; gap: 8px; }

        .li-btn-p {
          background: var(--li-blue);
          color: #fff;
          border: none;
          border-radius: 20px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: background 0.2s, transform 0.1s;
        }

        .li-btn-p:hover {
          background: var(--li-blue-dark);
        }

        .li-btn-p:active {
          transform: scale(0.98);
        }

        .li-btn-o {
          background: transparent;
          color: var(--li-blue);
          border: 1.5px solid var(--li-blue);
          border-radius: 20px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: background 0.2s, transform 0.1s;
        }

        .li-btn-o:hover {
          background: var(--li-blue-light);
        }

        .li-btn-o:active {
          transform: scale(0.98);
        }

        .li-hero-h { font-size: 20px; font-weight: 700; color: #1d1d1d; margin-bottom: 5px; }
        .li-hero-s { font-size: 13px; color: #555; }

        .form-stack { display: flex; flex-direction: column; gap: 10px; margin-bottom: 1rem; }
        .field-group { display: flex; flex-direction: column; gap: 3px; }
        .field-label { font-size: 12px; font-weight: 500; color: var(--text-secondary); }

        .field-input {
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 9px 12px;
          font-size: 14px;
          background: #fff;
          color: var(--text-primary);
          width: 100%;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .field-input:focus {
          outline: none;
        }

        .field-input.active-field { border-color: var(--li-blue); box-shadow: 0 0 0 3px rgba(10,102,194,0.12); }

        select.field-input {
          cursor: pointer;
        }

        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .tip-box, .warn-box, .success-box {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border-radius: var(--radius-md);
          padding: 11px 14px;
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .tip-box { background: var(--li-blue-light); border: 1px solid var(--li-blue-border); color: #185FA5; }
        .warn-box { background: var(--warn-bg); border: 1px solid var(--warn-border); color: var(--warn-text); }
        .success-box { background: var(--success-bg); border: 1px solid var(--success-border); color: var(--success-text); }

        .tip-box i, .warn-box i, .success-box i { font-size: 17px; flex-shrink: 0; margin-top: 1px; }

        .checklist { display: flex; flex-direction: column; gap: 9px; margin-bottom: 1.5rem; }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-primary);
        }

        .check-item i { font-size: 17px; flex-shrink: 0; margin-top: 2px; color: var(--success-text); }

        .otp-wrap { display: flex; gap: 8px; justify-content: center; margin: 1rem 0; }

        .otp-cell {
          width: 42px;
          height: 50px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 600;
          color: var(--li-blue);
          cursor: text;
          transition: border-color 0.2s, background 0.2s;
        }

        .otp-cell:focus-within {
          border-color: var(--li-blue);
          box-shadow: 0 0 0 3px rgba(10,102,194,0.12);
        }

        .otp-cell.filled { border-color: var(--li-blue); background: var(--li-blue-light); }

        .profile-card {
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #fff;
        }

        .profile-cover {
          height: 72px;
          background: linear-gradient(120deg, #0A66C2 0%, #00669E 100%);
        }

        .profile-inner { padding: 0 1.25rem 1.25rem; }

        .profile-ava {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--surface-secondary);
          border: 3px solid #fff;
          margin-top: -32px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: var(--text-hint);
          box-shadow: 0 1px 4px rgba(0,0,0,0.12);
        }

        .profile-name { font-size: 16px; font-weight: 600; margin-bottom: 2px; }
        .profile-headline { font-size: 13px; color: var(--text-secondary); margin-bottom: 10px; }

        .li-connect-btn {
          background: var(--li-blue);
          color: #fff;
          border: none;
          border-radius: 20px;
          padding: 6px 18px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Inter', sans-serif;
          transition: background 0.2s, transform 0.1s;
        }

        .li-connect-btn:hover {
          background: var(--li-blue-dark);
        }

        .li-connect-btn:active {
          transform: scale(0.98);
        }

        .next-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-bottom: 1.5rem;
        }

        .next-item {
          background: var(--surface-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 14px;
        }

        .next-item i { font-size: 22px; color: var(--li-blue); margin-bottom: 8px; display: block; }
        .next-item .ni-title { font-size: 13px; font-weight: 600; margin-bottom: 4px; }
        .next-item .ni-desc { font-size: 12px; color: var(--text-secondary); line-height: 1.5; }

        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          margin-top: 1.25rem;
          border-top: 1px solid var(--border-light);
        }

        .btn-nav {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 20px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
        }

        .btn-nav:hover:not(:disabled) { background: var(--surface-secondary); }
        .btn-nav:disabled { opacity: 0.35; cursor: not-allowed; }

        .btn-primary {
          background: var(--li-blue);
          color: #fff;
          border-color: var(--li-blue);
        }

        .btn-primary:hover:not(:disabled) { background: var(--li-blue-dark); border-color: var(--li-blue-dark); }

        .nav-count { font-size: 13px; color: var(--text-secondary); }

        .page-footer {
          margin-top: 2rem;
          font-size: 12px;
          color: var(--text-hint);
          text-align: center;
        }

        @media (max-width: 600px) {
          .field-row { grid-template-columns: 1fr; }
          .next-grid { grid-template-columns: 1fr 1fr; }
          .steps-nav { gap: 4px; }
          .step-pill { font-size: 11px; padding: 4px 9px; }
        }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/dist/tabler-icons.min.css" />

      <div className="tutorial-container">
        <div className="page-header">
          <div className="li-logo-badge">in</div>
          <div className="page-header-text">
            <h1>Cómo crear una cuenta en LinkedIn</h1>
            <p>Tutorial interactivo paso a paso · 5 pasos</p>
          </div>
        </div>

        <div className="progress-wrap">
          <span style={{fontSize: '12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap'}}>
            Paso {currentStep + 1} de {steps.length}
          </span>
          <div className="progress-track">
            <div className="progress-fill" style={{width: `${pct}%`}}></div>
          </div>
          <span className="progress-label">{pct}%</span>
        </div>

        <div className="steps-nav">
          {steps.map((s, i) => {
            let cls = 'step-pill';
            if (i === currentStep) cls += ' active';
            else if (i < currentStep) cls += ' done';
            return (
              <div key={i} className={cls} onClick={() => setCurrentStep(i)}>
                <span className="pill-num">
                  {i < currentStep ? <i className="ti ti-check" style={{fontSize: '10px'}}></i> : i + 1}
                </span>
                {s.pillLabel}
              </div>
            );
          })}
        </div>

        <div className="card">
          <div className="card-header">
            <div className="step-badge">{currentStep + 1}</div>
            <div className="card-header-text">
              <div className="title">{steps[currentStep].title}</div>
              <div className="subtitle">{steps[currentStep].subtitle}</div>
            </div>
          </div>
          <div className="card-body" key={currentStep}>
            {steps[currentStep].render()}
            <div className="nav-row">
              <button
                className="btn-nav"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={isFirst}
              >
                <i className="ti ti-arrow-left"></i> Anterior
              </button>
              <span className="nav-count">{currentStep + 1} / {steps.length}</span>
              {isLast ? (
                <button
                  className="btn-nav btn-primary"
                  onClick={() => window.open('https://www.linkedin.com/signup', '_blank')}
                >
                  Ir a LinkedIn <i className="ti ti-external-link"></i>
                </button>
              ) : (
                <button
                  className="btn-nav btn-primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Siguiente <i className="ti ti-arrow-right"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="page-footer">Tutorial creado con fines educativos · Basado en la interfaz de LinkedIn 2025</p>
      </div>
    </>
  );
}