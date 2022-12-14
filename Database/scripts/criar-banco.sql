	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	);


	CREATE TABLE sessoes (
		id SERIAL PRIMARY KEY,
		userId INTEGER NOT NULL REFERENCES users(id),
		token TEXT NOT NULL UNIQUE
	);
	
	CREATE TABLE empresas (
		id SERIAL PRIMARY KEY,
		nome TEXT NOT NULL UNIQUE,
		CNPJ TEXT NOT NULL UNIQUE,
		descricao TEXT NOT NULL
	);

	CREATE TABLE locais (
		id SERIAL PRIMARY KEY,
		nome TEXT NOT NULL UNIQUE,
		CEP INT NOT NULL UNIQUE,
		empresaId INTEGER NOT NULL REFERENCES empresas(id)
	);

	CREATE TABLE responsaveis(
		id SERIAL PRIMARY KEY,
		nome TEXT NOT NULL,	
		telefone TEXT NOT NULL,
		CEP TEXT NOT NULL UNIQUE
	);

	CREATE TABLE responsaveisEmpresas (
		id SERIAL PRIMARY KEY,
		responsavelId INTEGER NOT NULL REFERENCES responsaveis(id),
		empresaId INTEGER NOT NULL REFERENCES empresas(id),
		principal BOOLEAN NOT NULL DEFAULT FALSE
	);

	CREATE TABLE responsaveisLocais (
		id SERIAL PRIMARY KEY,
		responsavelId INTEGER NOT NULL REFERENCES responsaveis(id),
		localId INTEGER NOT NULL REFERENCES locais(id),
		principal BOOLEAN NOT NULL DEFAULT FALSE
	);

	CREATE TABLE tickets (
		id uuid NOT NULL PRIMARY KEY,
		titulo TEXT NOT NULL,
		dataCriacao TIMESTAMP NOT NULL DEFAULT NOW(),
		dataAtualizacao TIMESTAMP DEFAULT NULL,
		criadorId INTEGER NOT NULL REFERENCES users(id),
		usuarioId INTEGER NOT NULL REFERENCES users(id),
		status TEXT NOT NULL CHECK (status = 'PENDENTE' OR status = 'PROGRESSO' OR status = 'CONCLUÍDO' ),
		localId INTEGER NOT NULL REFERENCES locais(id)
	);

	


