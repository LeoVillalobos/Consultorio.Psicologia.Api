CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE eventos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre_evento VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_inicio TIMESTAMP NOT NULL,
    fecha_fin TIMESTAMP NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    "createdAt" varchar(30) COLLATE "pg_catalog"."default",
    "createdBy" varchar(18) COLLATE "pg_catalog"."default",
    "createdOn" timestamp(6)
);

CREATE TABLE Personas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fecha_nacimiento DATE,
    direccion VARCHAR(100),
    "createdAt" varchar(30) COLLATE "pg_catalog"."default",
    "createdBy" varchar(18) COLLATE "pg_catalog"."default",
    "createdOn" timestamp(6)
);

CREATE TABLE Usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre_usuario VARCHAR(50),
    contrasenia TEXT,
    correo_electronico VARCHAR(100),
    fk_persona_id UUID REFERENCES Personas(id),
    "createdAt" varchar(30) COLLATE "pg_catalog"."default",
    "createdBy" varchar(18) COLLATE "pg_catalog"."default",
    "createdOn" timestamp(6)
);

CREATE TABLE Clientes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(50),
    persona_id UUID REFERENCES Personas(id)
);

-- Crear tabla de Roles
CREATE TABLE Roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre_rol VARCHAR(50)
    -- Otros campos descriptivos sobre el rol
);

-- Crear tabla de Permisos
CREATE TABLE Permisos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre_permiso VARCHAR(50)
    -- Otros campos descriptivos sobre el permiso
);

-- Crear tabla de Asignación de Roles a Usuarios
CREATE TABLE Asignacion_Roles_Usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID REFERENCES Usuarios(id),
    rol_id UUID REFERENCES Roles(id)
);

-- Crear tabla de Asignación de Permisos a Roles
CREATE TABLE Asignacion_Permisos_Roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rol_id UUID REFERENCES Roles(id),
    permiso_id UUID REFERENCES Permisos(id)
);
