namespace Fuggohidak
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            components = new System.ComponentModel.Container();
            label1 = new Label();
            label2 = new Label();
            label3 = new Label();
            contextMenuStrip1 = new ContextMenuStrip(components);
            dataGridView1 = new DataGridView();
            Column1 = new DataGridViewTextBoxColumn();
            Column2 = new DataGridViewTextBoxColumn();
            Column3 = new DataGridViewTextBoxColumn();
            Column4 = new DataGridViewTextBoxColumn();
            Column5 = new DataGridViewTextBoxColumn();
            Column6 = new DataGridViewTextBoxColumn();
            keresesButton = new Button();
            numericUpDownTOL = new NumericUpDown();
            numericUpDownIG = new NumericUpDown();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).BeginInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownTOL).BeginInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownIG).BeginInit();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(29, 43);
            label1.Name = "label1";
            label1.Size = new Size(129, 15);
            label1.TabIndex = 0;
            label1.Text = "Keresés évszám alapján";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(135, 81);
            label2.Name = "label2";
            label2.Size = new Size(26, 15);
            label2.TabIndex = 1;
            label2.Text = "-tól";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(317, 81);
            label3.Name = "label3";
            label3.Size = new Size(22, 15);
            label3.TabIndex = 2;
            label3.Text = "-ig";
            // 
            // contextMenuStrip1
            // 
            contextMenuStrip1.Name = "contextMenuStrip1";
            contextMenuStrip1.Size = new Size(61, 4);
            // 
            // dataGridView1
            // 
            dataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView1.Columns.AddRange(new DataGridViewColumn[] { Column1, Column2, Column3, Column4, Column5, Column6 });
            dataGridView1.Location = new Point(12, 131);
            dataGridView1.Name = "dataGridView1";
            dataGridView1.Size = new Size(680, 307);
            dataGridView1.TabIndex = 4;
            // 
            // Column1
            // 
            Column1.HeaderText = "Helyezés";
            Column1.Name = "Column1";
            // 
            // Column2
            // 
            Column2.HeaderText = "Híd";
            Column2.Name = "Column2";
            // 
            // Column3
            // 
            Column3.HeaderText = "Hely";
            Column3.Name = "Column3";
            // 
            // Column4
            // 
            Column4.HeaderText = "Ország";
            Column4.Name = "Column4";
            // 
            // Column5
            // 
            Column5.HeaderText = "Év";
            Column5.Name = "Column5";
            // 
            // Column6
            // 
            Column6.HeaderText = "Hossz";
            Column6.Name = "Column6";
            // 
            // keresesButton
            // 
            keresesButton.Location = new Point(398, 79);
            keresesButton.Name = "keresesButton";
            keresesButton.Size = new Size(75, 23);
            keresesButton.TabIndex = 5;
            keresesButton.Text = "Keresés";
            keresesButton.UseVisualStyleBackColor = true;
            keresesButton.Click += keresesButton_Click;
            // 
            // numericUpDownTOL
            // 
            numericUpDownTOL.Location = new Point(9, 79);
            numericUpDownTOL.Maximum = new decimal(new int[] { 2050, 0, 0, 0 });
            numericUpDownTOL.Minimum = new decimal(new int[] { 1900, 0, 0, 0 });
            numericUpDownTOL.Name = "numericUpDownTOL";
            numericUpDownTOL.Size = new Size(120, 23);
            numericUpDownTOL.TabIndex = 6;
            numericUpDownTOL.Value = new decimal(new int[] { 1930, 0, 0, 0 });
            // 
            // numericUpDownIG
            // 
            numericUpDownIG.Location = new Point(191, 79);
            numericUpDownIG.Maximum = new decimal(new int[] { 2050, 0, 0, 0 });
            numericUpDownIG.Minimum = new decimal(new int[] { 1900, 0, 0, 0 });
            numericUpDownIG.Name = "numericUpDownIG";
            numericUpDownIG.Size = new Size(120, 23);
            numericUpDownIG.TabIndex = 7;
            numericUpDownIG.Value = new decimal(new int[] { 2026, 0, 0, 0 });
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(numericUpDownIG);
            Controls.Add(numericUpDownTOL);
            Controls.Add(keresesButton);
            Controls.Add(dataGridView1);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(label1);
            Name = "Form1";
            Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)dataGridView1).EndInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownTOL).EndInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownIG).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private Label label2;
        private Label label3;
        private ContextMenuStrip contextMenuStrip1;
        private DataGridView dataGridView1;
        private DataGridViewTextBoxColumn Column1;
        private DataGridViewTextBoxColumn Column2;
        private DataGridViewTextBoxColumn Column3;
        private DataGridViewTextBoxColumn Column4;
        private DataGridViewTextBoxColumn Column5;
        private DataGridViewTextBoxColumn Column6;
        private Button keresesButton;
        private NumericUpDown numericUpDownTOL;
        private NumericUpDown numericUpDownIG;
    }
}
