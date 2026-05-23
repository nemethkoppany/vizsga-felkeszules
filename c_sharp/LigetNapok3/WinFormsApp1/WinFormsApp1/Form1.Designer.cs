namespace WinFormsApp1
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
            menuStrip1 = new MenuStrip();
            újEseményToolStripMenuItem = new ToolStripMenuItem();
            kilépésToolStripMenuItem = new ToolStripMenuItem();
            dataGridView1 = new DataGridView();
            Column1 = new DataGridViewTextBoxColumn();
            Column2 = new DataGridViewTextBoxColumn();
            Column3 = new DataGridViewTextBoxColumn();
            Column4 = new DataGridViewTextBoxColumn();
            Column5 = new DataGridViewTextBoxColumn();
            comboBox1 = new ComboBox();
            szuresButton = new Button();
            osszesButton = new Button();
            menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).BeginInit();
            SuspendLayout();
            // 
            // menuStrip1
            // 
            menuStrip1.Items.AddRange(new ToolStripItem[] { újEseményToolStripMenuItem, kilépésToolStripMenuItem });
            menuStrip1.Location = new Point(0, 0);
            menuStrip1.Name = "menuStrip1";
            menuStrip1.Size = new Size(1309, 24);
            menuStrip1.TabIndex = 0;
            menuStrip1.Text = "menuStrip1";
            // 
            // újEseményToolStripMenuItem
            // 
            újEseményToolStripMenuItem.Name = "újEseményToolStripMenuItem";
            újEseményToolStripMenuItem.Size = new Size(80, 20);
            újEseményToolStripMenuItem.Text = "Új esemény";
            // 
            // kilépésToolStripMenuItem
            // 
            kilépésToolStripMenuItem.Name = "kilépésToolStripMenuItem";
            kilépésToolStripMenuItem.Size = new Size(56, 20);
            kilépésToolStripMenuItem.Text = "Kilépés";
            kilépésToolStripMenuItem.Click += kilépésToolStripMenuItem_Click;
            // 
            // dataGridView1
            // 
            dataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView1.Columns.AddRange(new DataGridViewColumn[] { Column1, Column2, Column3, Column4, Column5 });
            dataGridView1.Location = new Point(12, 40);
            dataGridView1.Name = "dataGridView1";
            dataGridView1.Size = new Size(1106, 373);
            dataGridView1.TabIndex = 1;
            // 
            // Column1
            // 
            Column1.HeaderText = "Cím";
            Column1.Name = "Column1";
            // 
            // Column2
            // 
            Column2.HeaderText = "Dátum";
            Column2.Name = "Column2";
            // 
            // Column3
            // 
            Column3.HeaderText = "Helyszín";
            Column3.Name = "Column3";
            // 
            // Column4
            // 
            Column4.HeaderText = "Kategória";
            Column4.Name = "Column4";
            // 
            // Column5
            // 
            Column5.HeaderText = "Résztvevők";
            Column5.Name = "Column5";
            // 
            // comboBox1
            // 
            comboBox1.FormattingEnabled = true;
            comboBox1.Location = new Point(12, 430);
            comboBox1.Name = "comboBox1";
            comboBox1.Size = new Size(121, 23);
            comboBox1.TabIndex = 2;
            // 
            // szuresButton
            // 
            szuresButton.Location = new Point(171, 430);
            szuresButton.Name = "szuresButton";
            szuresButton.Size = new Size(75, 23);
            szuresButton.TabIndex = 3;
            szuresButton.Text = "Szűrés";
            szuresButton.UseVisualStyleBackColor = true;
            szuresButton.Click += szuresButton_Click;
            // 
            // osszesButton
            // 
            osszesButton.Location = new Point(274, 430);
            osszesButton.Name = "osszesButton";
            osszesButton.Size = new Size(75, 23);
            osszesButton.TabIndex = 4;
            osszesButton.Text = "Összes";
            osszesButton.UseVisualStyleBackColor = true;
            osszesButton.Click += osszesButton_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1309, 582);
            Controls.Add(osszesButton);
            Controls.Add(szuresButton);
            Controls.Add(comboBox1);
            Controls.Add(dataGridView1);
            Controls.Add(menuStrip1);
            MainMenuStrip = menuStrip1;
            Name = "Form1";
            Text = "Form1";
            menuStrip1.ResumeLayout(false);
            menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private MenuStrip menuStrip1;
        private ToolStripMenuItem újEseményToolStripMenuItem;
        private ToolStripMenuItem kilépésToolStripMenuItem;
        private DataGridView dataGridView1;
        private ComboBox comboBox1;
        private Button szuresButton;
        private Button osszesButton;
        private DataGridViewTextBoxColumn Column1;
        private DataGridViewTextBoxColumn Column2;
        private DataGridViewTextBoxColumn Column3;
        private DataGridViewTextBoxColumn Column4;
        private DataGridViewTextBoxColumn Column5;
    }
}
