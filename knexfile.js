module.exports = {
	development: {
		client: "sqlite3",
		connection: { filename: "./data/droom.db3" },
		useNullAsDefault: true,
		migrations: {
			directory: "./data/migrations"
		},
		seeds: { directory: "./data/seeds" }
	},
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done);
		}
	},
	testing: {
		client: "sqlite3",
		connection: {
			filename: "./data/test.db3"
		},
		useNullAsDefault: true,
		migrations: {
			directory: "./data/migrations"
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			}
		},
		seeds: {
			directory: "./data/seeds"
		}
	},
	production: {
		client: "sqlite3",
		connection: {
			filename: "./data/droom.db3"
		},
		migrations: {
			directory: "./data/migrations"
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			}
		},
		seeds: {
			directory: "./data/seeds"
		},
		useNullAsDefault: true
	}
};
