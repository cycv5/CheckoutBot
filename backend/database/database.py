import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        return conn


if __name__ == '__main__':
    conn = create_connection(r"./checkoutdb.db")
    cursor = conn.cursor()
res = cursor.execute("SELECT * from 'barcode_list';")
print(res.fetchall())
conn.commit()
