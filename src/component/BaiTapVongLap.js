import React, { Component } from "react";

export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "Iphone X", gia: 1000 },
        { maSP: 2, tenSP: "Samsung Note 10", gia: 800 },
        { maSP: 3, tenSP: "Google Pixel 4XL", gia: 1200 },
      ],
    };
  }
  renderTable = () => {
    return this.state.mangSanPham.map((sp, index) => {
      return (
        <tr key={sp.maSP}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>{sp.gia}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ma SP</th>
              <th>Ten SP</th>
              <th>Gia</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
