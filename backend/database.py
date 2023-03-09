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



def get_item_from_barcode(barcode):
    conn = create_connection(r"./checkoutdb.db")
    cursor = conn.cursor()
    res = cursor.execute("SELECT * from 'items' where barcode="+barcode+" LIMIT 1; ")
    # res = cursor.execute("SELECT sql FROM sqlite_master WHERE tbl_name = 'table_name' AND type = 'table';")
    items = res.fetchall()
    conn.commit()
    return items

