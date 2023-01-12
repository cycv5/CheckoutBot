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
    cursor.execute("CREATE TABLE IF NOT EXISTS barcode_list(barcode TEXT PRIMARY KEY, name TEXT, price TEXT)")
    res = cursor.execute("SELECT name FROM sqlite_master")
    print(res.fetchone())

cursor.execute("""
    INSERT INTO barcode_list VALUES
        ('001', 'book', '8.2')
""")